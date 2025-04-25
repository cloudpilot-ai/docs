# Uninstall CloudPilot
This document provides a step-by-step guide to uninstall CloudPilot from your Kubernetes cluster, including resolving issues caused by improper removal. Follow these instructions carefully to ensure a complete and clean uninstallation.

---

## Prerequisites
Before proceeding, ensure the following:
1. You have initiated the **"Remove"** operation for the cluster in the CloudPilot **Cost Overview** page.
2. You have:
   - `kubectl` configured with cluster access.
   - `curl` and `jq` installed.
   - The CloudPilot API key for your cluster.
   - AWS or AlibabaCloud credentials (if applicable) for cluster modifications.

---

## Step 1: Disable CloudPilot AI Rebalance
Disable the CloudPilot AI Rebalance feature to prevent automated node adjustments during uninstallation. This ensures cluster stability while removing components.

---

## Step 2: Restore Node Group Configurations
Run the script below to revert any node group scaling adjustments made by CloudPilot. Replace `xxx` with your cluster name and region.
```bash
export CLUSTER_NAME=xxx
export CLUSTER_REGION=us-east-2
curl --silent "https://onboard.cloudpilot.ai/common/eks/restore.sh" | bash
```

---

## Step 3: Drain and Remove Optimized Nodes
Drain and delete all CloudPilot-managed nodes from the cluster.

1. **Drain nodes**:
   ```bash
   for node in $(kubectl get node -l node.cloudpilot.ai/managed=true 2> /dev/null | grep -v 'No resources found' | tail -n +2 | awk '{print $1}'); do kubectl drain $node --ignore-daemonsets --delete-emptydir-data --force; done
   ```

2. **Verify removal**:
   ```bash
   while [[ $(kubectl get nodes -l node.cloudpilot.ai/managed=true -o json | jq -r '.items | length') -ne 0 ]]; do echo "Waiting for CloudPilot AI nodes to be removed..."; sleep 3; done
   ```

---

## Step 4: Run the Uninstallation Script
Execute the uninstall script to remove CloudPilot components. Replace `xxx` with your cluster-specific values.
```bash
export CLOUDPILOT_API_KEY=xxx
export CLOUD_PROVIDER=aws
export CLUSTER_ID=xxx
export CLUSTER_NAME=xxx
export CLUSTER_REGION=us-east-2
export AWS_PARTITION=aws
curl --silent "https://onboard.cloudpilot.ai/manifest/v1.10.0/eks/uninstall.sh" | bash
```

---

## Step 5: Finalize Cluster Removal
In the CloudPilot console, click **`I have ran the script, finish removing cluster`** to complete the process.

**Expected time**: 5–10 minutes. Monitor cluster status before performing further actions.

---

## More

### Troubleshooting Improper Uninstallation
**Symptoms**:
- Pod creation failures.
- NodeClaim operations suspended (nodes cannot be created/deleted).

**Cause**: Direct deletion of the `cloudpilot` namespace without following proper procedures.

**Resolution**:
1. Remove the orphaned webhook configuration:
   ```bash
   kubectl delete mutatingwebhookconfigurations.admissionregistration.k8s.io cloudpilot-webhook
   ```
2. Reinstall the CloudPilot agent using the script from the **Add cluster** button:
   ```bash
   export CLOUDPILOT_API_KEY=xxx
   export CLOUD_PROVIDER=aws
   curl --silent "https://onboard.cloudpilot.ai/manifest/v1.10.0/phase1/cloudpilot-agent.yaml" | envsubst | kubectl apply -f -
   ```
3. Reinstall CloudPilot fully using the **Start Saving** button script.
   ```bash
   export CLOUDPILOT_API_KEY=xxx
   export CLOUD_PROVIDER=aws
   export CLUSTER_ID=xxx
   export CLUSTER_NAME=xxx
   export CLUSTER_REGION=us-east-2
   export AWS_PARTITION=aws
   curl --silent "https://onboard.cloudpilot.ai/manifest/v1.10.0/eks/phase2/install.sh" | bash
   ```
4. Re-run the normal uninstallation process.

---

If issues persist, contact CloudPilot Technical Support immediately for assistance.
