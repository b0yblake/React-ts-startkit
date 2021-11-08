<h1 align="center">Routing, layouts, and views</h1>

### Routing

- https://reactrouter.com/docs/en/v6/getting-started/overview#installation

```
// Install Router
npm install react-router-dom@6

// Path: @/routes/index.tsx

└── src/
    ├── routes/
      ├── index.txs  // Routing configuration file

// Config
<BrowserRouter>
  <Routes>
    <Route path="/" element={...}>
	</Routes>
</BrowserRouter>

// Load in view App.tsx
...
	<RoutesPage />
...
```

### Layouts (@/templates/layouts)

- Layout's useful when project get the different layout, reuse components effective

```
// Path @/templates/layouts/MainDefault.tsx

// Declare the template layout with children / renderer
const MainLayout = ({ children }) => {
  return (
    <div>
      <Header />
      <Main>{children}</Main>
      <Footer />
    </div>
  );
};

// Calling
import MainDefault from '@/templates/layouts/MainDefault.tsx'
<template>
  <div class="home-layout">
    <MainDefault>
      Main home
    </MainDefault>
  </div>
</template>
```

### Views

- Container folder may contains all type of feature: `Display` `StateManager` `TypeSafe` `SideEffect` `Style(styled-component)` `Logic`

```
└── src/
    ├── containers/
      ├── Login
      ├── Home
      ├── Global
```
