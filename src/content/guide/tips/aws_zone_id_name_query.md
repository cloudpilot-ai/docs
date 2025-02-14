---
title: Query the correspondence between AWS zone id and zone name
---

# Query the correspondence between AWS zone id and zone name

When managing AWS resources, such as EC2 instances, you will often encounter the zone location of these resources. 

The zone location is typically displayed as the zone name. However, there may be times when you need to know the zone ID for specific reasons, such as identifying the most cost-effective zone for a particular EC2 instance type, which is always displayed with the zone ID. To find the correspondence, run the following command:
```sh
$ aws ec2 describe-availability-zones --query 'AvailabilityZones[*].[ZoneName,ZoneId]' --output table --region us-east-1

----------------------------
| DescribeAvailabilityZones|
+-------------+------------+
|  us-east-1a |  use1-az2  |
|  us-east-1b |  use1-az4  |
|  us-east-1c |  use1-az6  |
|  us-east-1d |  use1-az1  |
|  us-east-1e |  use1-az3  |
|  us-east-1f |  use1-az5  |
+-------------+------------+
```

Please note that the correspondence may differ across different accounts. For more information, refer to [Availability Zone IDs for your AWS resources](https://docs.aws.amazon.com/ram/latest/userguide/working-with-az-ids.html).