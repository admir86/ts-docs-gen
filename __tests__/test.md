# Package name
## Interfaces
### Bar

__Extends__ `Foo`

Name | Type | Summary
--- | --- | ---
Email* | string | 
GetCode?(id: `number`)  | string | Get Bar model code by id. Another line of summary.
### Foo
Name | Type | Summary
--- | --- | ---
Name* | string | 
Surname* | string | 
## Enums
### EventType
Name | Value | Summary
--- | --- | ---
Live | "live" | 
Test | "test" | 
### Test
Name | Value | Summary
--- | --- | ---
None | 0 | 
Warning | 8 | 
Error | 100 | 
## Functions
### Sum

Sum summary

```ts
function Sum(a: number, b: number): number;
```
#### Parameters

 - a: `number`
 - b: `number`
#### Returns

`number` Return summary.

## Classes
### FancyFooBar

__Extends__ `FooBar`

#### Properties
##### Bar
```ts
public readonly Bar: Bar;
```
### FooBar
#### Properties
##### Foo

Hello Foo summary

```ts
public Foo: string;
```
##### LocalBar
```ts
protected LocalBar: Bar;
```
#### Methods
##### GetSomething
```ts
public GetSomething(): string;
```
###### Returns

`string` 

##### SetBar

Summary of SetBar method.

```ts
public SetBar(bar: Bar): void;
```
###### Parameters

 - bar: `Bar`
###### Returns

`void` 