# Ref
## Installation
```bash
$ yarn add @flaze/ref # or npm i @flaze/ref
```

## Usage
```tsx
// Init
const ref = new Ref<HTMLDivElement>();

// Create
<div ref={ref.create} />

// Get
const element = ref.get();

// Has
const hasElement = ref.has();
```