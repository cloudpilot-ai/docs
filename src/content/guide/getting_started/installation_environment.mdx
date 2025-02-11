---
title: Prepare the terminal environment
---

# Prepare the terminal environment

If you don't have a Bash shell environment (MacOS, Linux), you can launch a pod (with all the prerequisites installed) in the Kubernetes cluster using the following command:
```sh
$ kubectl run helper --image=public.ecr.aws/cloudpilotai/helper:v0.3.0 -it --rm --restart=Never -- /bin/bash
```

## Configure AWS Credentials

If you are trying to optimize AWS EKS clusters, run the following command before installing CloudPilot AI:

```sh
$ aws configure
AWS Access Key ID [None]: <your_ak>
AWS Secret Access Key [None]: <your_sk>
Default region name [None]: us-east-2
Default output format [None]:
```

After this, run the following command to update the kubeconfig:

```sh
$ mkdir -p ~/.kube
$ export KUBECONFIG=~/.kube/config
$ aws eks update-kubeconfig --name <cluster_name> --region us-east-2
```

## Configure Alibaba Cloud Credentials

If you are trying to optimize Alibaba Cloud ACK clusters, run the following command before installing CloudPilot AI:

```sh
$ aliyun configure
Configuring profile 'default' in 'AK' authentication mode...
Access Key ID []: <your_ak>
Access Key Secret []: <your_sk>
Default Region ID []: shenzhen
Default Output Format [json]: json (Only supports json)
Default Language [zh|en] en:
Saving profile[default] ... Done.
```

After this, run the following command to get the kubeconfig:

```sh
$ mkdir -p ~/.kube
$ export KUBECONFIG=~/.kube/config
$ export CLUSTER_NAME=<cluster_name>
$ export CLUSTER_ID=$(aliyun cs GET /clusters | jq -r --arg CLUSTER_NAME "$CLUSTER_NAME" '.[] | select(.name == $CLUSTER_NAME) | .cluster_id')
$ aliyun cs GET /k8s/$CLUSTER_ID/user_config | jq -r '.config' > $KUBECONFIG
```

After completing all of these steps, you're ready to go!
