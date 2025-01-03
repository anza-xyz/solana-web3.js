[![npm][npm-image]][npm-url]
[![npm-downloads][npm-downloads-image]][npm-url]
<br />
[![code-style-prettier][code-style-prettier-image]][code-style-prettier-url]

[code-style-prettier-image]: https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square
[code-style-prettier-url]: https://github.com/prettier/prettier
[npm-downloads-image]: https://img.shields.io/npm/dm/@solana/rpc-subscriptions-channel-websocket/next.svg?style=flat
[npm-image]: https://img.shields.io/npm/v/@solana/rpc-subscriptions-channel-websocket/next.svg?style=flat
[npm-url]: https://www.npmjs.com/package/@solana/rpc-subscriptions-channel-websocket/v/next

# @solana/rpc-subscriptions-channel-websocket

A package to manage WebSocket-based communication channels for RPC subscriptions in the Solana ecosystem. It implements the `RpcSubscriptionsChannel` interface and handles connection management, message buffering, and error propagation.

## Installation

```bash
npm install @solana/rpc-subscriptions-channel-websocket
```

## Usage

The package provides a `createWebSocketChannel` function to establish a WebSocket channel for managing subscriptions. This function returns a `Promise` that resolves to an `RpcSubscriptionsChannel` instance.

### Example

```typescript
import { createWebSocketChannel } from '@solana/rpc-subscriptions-channel-websocket';

const config = {
    url: 'wss://api.mainnet-beta.solana.com',
    sendBufferHighWatermark: 64 * 1024, // 64 KB
    signal: new AbortController().signal,
};

(async () => {
    try {
        const channel = await createWebSocketChannel(config);

        // Listen to messages
        channel.subscribe((message) => {
            console.log('Received message:', message);
        });

        // or to specific messages
        channel.on('message', (message) => {
            console.log('Received message:', message);
        });

        // Send a message
        await channel.send(JSON.stringify({ method: 'subscribe', params: [] }));

        console.log('Subscription established');
    } catch (error) {
        console.error('Failed to create WebSocket channel:', error);
    }
})();
```

## API

### `createWebSocketChannel(config: Config): Promise<RpcSubscriptionsChannel<WebSocketMessage, string>>`

Creates a WebSocket-based channel for managing RPC subscriptions.

#### Parameters

- `config` (object): Configuration options for the WebSocket channel.
  - `url` (string): The WebSocket server URL.
  - `sendBufferHighWatermark` (number): The threshold (in bytes) for the WebSocket buffer. If exceeded, messages are queued until the buffer is drained.
  - `signal` (AbortSignal): A signal to handle connection abortion.

#### Returns

A `Promise` that resolves to an `RpcSubscriptionsChannel` object. The channel object provides the following methods:
- `on(event: 'message' | 'error', callback: (payload: string | Error) => void): void`

  - Registers a listener for a specified event type.

  - Supported events:

    - 'message': Called with incoming WebSocket messages.

    - 'error': Called with error details when the connection encounters an issue.

- `subscribe(callback: (message: string) => void): void`

  - Alias for on('message', callback).

  - Registers a callback to listen to incoming messages.

- `send(message: WebSocketMessage): Promise<void>`

  - Sends a message through the WebSocket connection.
  - Resolves when the message is successfully sent or buffered.
  - Throws an error if the connection is closed or fails.

#### Errors

The function may reject with the following errors:

- `SOLANA_ERROR__RPC_SUBSCRIPTIONS__CHANNEL_FAILED_TO_CONNECT`

  - Indicates that the WebSocket connection failed to establish.

- `SOLANA_ERROR__RPC_SUBSCRIPTIONS__CHANNEL_CONNECTION_CLOSED`

  - Indicates that the WebSocket connection was closed unexpectedly.

- `SOLANA_ERROR__RPC_SUBSCRIPTIONS__CHANNEL_CLOSED_BEFORE_MESSAGE_BUFFERED`

  - Indicates that the WebSocket connection closed before a buffered message could be sent.

## Error Handling

The package uses the `@solana/errors` library to provide structured error objects. Each error includes additional context, such as the underlying WebSocket event or the reason for the failure.

## Events

The package dispatches the following events using the `@solana/event-target-impl` package:

- `message`

  - Emitted when a new message is received from the server.

- `error`

  - Emitted when an error occurs in the WebSocket connection.

## Implementation Details

The package internally uses:

- `@solana/errors`: To handle and propagate errors.
- `@solana/event-target-impl`: To implement event-driven architecture.
- `@solana/rpc-subscriptions-spec`: For the `RpcSubscriptionsChannel` interface.
- `@solana/subscribable`: For managing subscriptions.
- `@solana/ws-impl`: As the WebSocket implementation.

### Constants

- `NORMAL_CLOSURE_CODE = 1000`
  - The WebSocket close code for normal closure, as defined in [RFC 6455](https://www.rfc-editor.org/rfc/rfc6455.html#section-7.4.1).


