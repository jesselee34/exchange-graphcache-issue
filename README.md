# URQL GraphCache Issue

## Setup

```sh
npm install yarn -g

yarn install

lerna bootstrap
```

## Run

```
yarn start
```

## Reproduce

Click the button then wait about 2 second and click it again.

The count will got to 1 after the first click. After the second click it will go to 2.

Now, wait about 2 seconds, the count will be rolled back to 1, then, it will be restored to 2.  