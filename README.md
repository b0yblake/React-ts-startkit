<h1 align="center">[WIP] - React CRA TypeScript startkit</h1>

> This template should help get you started developing with Reac and Typescript in webpack.. Questions, feedback, and for now, even bikeshedding are welcome.

## Features

- [**React & TypeScript already**](#documentation): webpack tool & TypeScript has included making React great
- [**Thorough documentation**](#documentation): All knowledge was care for (tested) & written very details
- [**Guaranteed consistency**](docs/linting.md): Lint and prettier / Git hook for caring code type convention
- [**First-class tests**](docs/tests.md): Practice test-driven development with sample unit(Jest - by Facebook)

## Migrations

- From begin 2024, the React team release the React version 19, please look careful for all new features: https://react.dev/blog/2024/04/25/react-19 <br>
- Micro change but affect to all layout its the feature `turn Ref into props` with method `forwardRef` <br>
- Please got this example to change

Before:
```javascript
const CardHeader = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={classNames("flex flex-col space-y-1.5 p-6", className)}
    {...props}
  />
));
```

After:
```javascript
const CardHeader: React.FC<React.ComponentProps<"div">> = ({
  className,
  ...props
}) => (
  <div
    className={classNames("flex flex-col space-y-1.5 p-6", className)}
    {...props}
  />
);
```

Additional Notes
- You will not need to change how the components are being used. They should all still work as before. All tests were passing before I made this PR.
- I cannot confirm if all warnings are eliminated. However, in my personal project, these changes removed the warnings.


## Documentation

This project includes a `docs` folder with more details on:

1.  [Setup and development](docs/development.md)
2.  [Architecture](docs/architecture.md)
3.  [Languages and technologies](docs/tech.md)
4.  [Routing, layouts, and views](docs/routing.md)
5.  [State management](docs/state.md)
6.  [Tests and mocking the API](docs/tests.md)
7.  [Linting and formatting](docs/linting.md)
8.  [Editor integration](docs/editors.md)
9.  [Building and deploying to production](docs/production.md)

## FAQ's

<details>
<summary>Should we need to add all configs for the new current project?</summary><br><b>

> No, you can choose one or maybe several of the richest features for your project. <br> This template it's just like the normal project.

</details>

<details>
<summary>TypeScript may be new to me, should I use it?</summary><br><b>

> Trending is important for the developer world, if you don't follow that, you can be foggy

</details>

## Getting started

```
npm install
npm start
npm build
```
