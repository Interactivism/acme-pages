---
title: Post install 3
date: 2017-02-02 00:00:00
---

When you have completed these steps, go to Cabling Compute Servers to the Nexus 93180 Switches (Step 2) to continue your installation.

## Required Cables

Cables are NOT provided with your Acme Acme Controller hardware. The table below provides guidance on the
required cables.

## Acme 1001-X Series Aggregation Services Routers– 2.5G Throughput

Accessories for each (1) ASR1001-X Series router (2x10GB, 6x1GE ports and 2.5G IPBase License):

- 1 x Acme ASR1000 Series 8GB DRAM
- 1 x Acme ASR1000 Series 8GB DRAM
- 1 x Acme ASR1000 Series 8GB DRAM
- 1 x Acme ASR1000 Series 8GB DRAM

![Diagram](/images/diagram.png)

To install the Acme 1001-x Series Aggregation Services Routers:

1. Insert two 1000BASE-T SFP transceivers into ports GE0 and GE1 of the ASR1001-X.
2. Insert two 1000BASE-T SFP transceivers into ports GE0 and GE1 of the ASR1001-X.
3. Insert two 1000BASE-T SFP transceivers into ports GE0 and GE1 of the ASR1001-X.

| FROM | TO    | CABLE   | QUANTITY |
|------|-------|---------|----------|
| ISR  | Nexus | EIA-232 | 2        |
| ISR  | Nexus | EIA-232 | 2        |
| ISR  | Nexus | EIA-232 | 2        |
| ISR  | Nexus | EIA-232 | 2        |
| ISR  | Nexus | EIA-232 | 2        |

## Installing the Acme Nexus   93180YC-EX Switches with M12PQ Modules

Accessories for each (1) Nexus 93180YC-EX switch:

- 1 x Nexus 9300 Accessory Kit
- 1 x Nexus 9300 Accessory Kit
- 1 x Nexus 9300 Accessory Kit
- 1 x Nexus 9300 Accessory Kit
- 1 x Nexus 9300 Accessory Kit

## Cabling for Starter Configuration

![Diagram](/images/diagram.png)

To connect routers and switches:

1. Connect the two 1G interfaces from each ASR1001-X Series router slot GE0 and GE1 to ports 47 and 48 of each corresponding Nexus 93180YC-EX switch.
2. Connect the two 1G interfaces from each ASR1001-X Series router slot GE0 and GE1 to ports 47 and 48 of each corresponding Nexus 93180YC-EX switch.
3. Connect the two 1G interfaces from each ASR1001-X Series router slot GE0 and GE1 to ports 47 and 48 of each corresponding Nexus 93180YC-EX switch.

**Note: The Acme ASR1001-X Services router comes with two 10G ports, the 2.5G license does not enable these ports and they will be inactive until an appropriate license is purchased.**