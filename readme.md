# DIR #

#### Decentralised Investigative Report ####

A decentralized investigation report for people to report crimes to police in real time. As this Dapp is based on blockchain any malice can be easily seen and found.

The Dapp will have 4 consoles. One each for the user, police, investigators, and the judge. Once the user submits a DIR , it will be appended into the blockchain and can't be tampered with or removed after that.

#### Project ScreenShots

![Alt text](images/user.jpeg?raw=true)

![Alt text](images/police.png?raw=true)

![Alt text](images/investigation.png?raw=true)

![Alt text](images/Court.png?raw=true)


#### Steps to run project ####

Make sure npm and nodejs are installed on your machine.

Clone the repository on your local machine and run.

```bash
npm install
```

##### Setting up the development environment 

```bash
npm install -g ethereumjs-testrpc
```

```bash
npm install -g truffle
```

##### Running the project

Run test-rpc

```bash
./starttestrpc.sh
```

Compile project

```bash
truffle compile
```

Deploy project

```bash
truffle migrate
```