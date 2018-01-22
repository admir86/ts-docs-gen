# Table of contents

* [Foo][ClassDeclaration-0]
    * Constructor
        * [constructor(suffix)][Constructor-0]
    * Methods
        * [getTimeString()][MethodDeclaration-0]
        * [DefaultMessageTypeString()][MethodDeclaration-1]
        * [resolveMessageDto(message, time)][MethodDeclaration-2]
        * [GetMessage(message)][MethodDeclaration-3]
        * [PrintMessage(messageDto)][MethodDeclaration-4]
        * [ResolveSimpleMessageObject(message)][MethodDeclaration-5]
    * Properties
        * [Name][PropertyDeclaration-0]
        * [internalName][PropertyDeclaration-1]
        * [defaultMessage][PropertyDeclaration-2]
        * [messageSuffix][PropertyDeclaration-3]
        * [IsSuffixSet][PropertyDeclaration-4]
        * [DefaultMessage][GetAccessor-0]
        * [getMessageSuffix][GetAccessor-1]
        * [setMessageSuffix][SetAccessor-0]
        * [SetDefaultSuffix][SetAccessor-1]

# Foo

General comment about class Foo.

```typescript
class Foo
```
## Constructor

### constructor(suffix)

Some constructor.

```typescript
public constructor(suffix: string | undefined);
```

**Parameters**

| Name   | Type               | Description        |
| ------ | ------------------ | ------------------ |
| suffix | string | undefined | Suffix of message. |

## Methods

### getTimeString()

private static method `getTimeString` comment.

```typescript
private static getTimeString(): string;
```

**Return type**

string

----------

### DefaultMessageTypeString()

public static method `DefaultMessageTypeString` comment.

```typescript
public static DefaultMessageTypeString(): string;
```

**Return type**

string

----------

### resolveMessageDto(message, time)

```typescript
private resolveMessageDto<T = {}>(message: T, time?: string | undefined): MessageDto<T>;
```

**Type parameters**

| Name | Default type |
| ---- | ------------ |
| T    | {}           |

**Parameters**

| Name    | Type               |
| ------- | ------------------ |
| message | T                  |
| time    | string | undefined |

**Return type**

[MessageDto][InterfaceDeclaration-0]<T>

----------

### GetMessage(message)

```typescript
public GetMessage(message: string): string;
```

**Parameters**

| Name    | Type   | Description   |
| ------- | ------ | ------------- |
| message | string | Message text. |

**Return type**

string

----------

### PrintMessage(messageDto)

```typescript
public PrintMessage<T extends Object>(messageDto: MessageDto<T>): void;
```

**Type parameters**

| Name | Constraint type |
| ---- | --------------- |
| T    | Object          |

**Parameters**

| Name       | Type                                    |
| ---------- | --------------------------------------- |
| messageDto | [MessageDto][InterfaceDeclaration-0]<T> |

**Return type**

void

----------

### ResolveSimpleMessageObject(message)

```typescript
public ResolveSimpleMessageObject<T>(message: T): { Message: T; };
```

**Type parameters**

| Name |
| ---- |
| T    |

**Parameters**

| Name    | Type |
| ------- | ---- |
| message | T    |

**Return type**

{ Message: T; }

## Properties

### Name

<span style="color: red;">Deprecated!</span>

public static property `Name` comment.

```typescript
public static Name: string;
```

**Type**

string

----------

### internalName

```typescript
private static internalName: string;
```

**Type**

string

----------

### defaultMessage

private readonly method `defaultMessage` comment.

```typescript
private readonly defaultMessage: string;
```

**Type**

string

----------

### messageSuffix

<span style="color: #d2d255;">Warning: Beta!</span>

```typescript
private messageSuffix: string | undefined;
```

**Type**

string | undefined

----------

### IsSuffixSet

```typescript
public IsSuffixSet?: boolean | undefined;
```

**Type**

boolean | undefined

----------

### DefaultMessage

```typescript
public get DefaultMessage: string;
```

**Type**

string

----------

### getMessageSuffix

```typescript
private get getMessageSuffix: string;
```

**Type**

string

----------

### setMessageSuffix

```typescript
private set setMessageSuffix: string | undefined;
```

**Type**

string | undefined

----------

### SetDefaultSuffix

```typescript
public set SetDefaultSuffix: string;
```

**Type**

string

[ClassDeclaration-0]: foo.md#foo
[Constructor-0]: foo.md#constructorsuffix
[MethodDeclaration-0]: foo.md#gettimestring
[MethodDeclaration-1]: foo.md#defaultmessagetypestring
[MethodDeclaration-2]: foo.md#resolvemessagedtomessage-time
[InterfaceDeclaration-0]: ../#__error
[MethodDeclaration-3]: foo.md#getmessagemessage
[MethodDeclaration-4]: foo.md#printmessagemessagedto
[InterfaceDeclaration-0]: ../#__error
[MethodDeclaration-5]: foo.md#resolvesimplemessageobjectmessage
[PropertyDeclaration-0]: foo.md#name
[PropertyDeclaration-1]: foo.md#internalname
[PropertyDeclaration-2]: foo.md#defaultmessage
[PropertyDeclaration-3]: foo.md#messagesuffix
[PropertyDeclaration-4]: foo.md#issuffixset
[GetAccessor-0]: foo.md#defaultmessage
[GetAccessor-1]: foo.md#getmessagesuffix
[SetAccessor-0]: foo.md#setmessagesuffix
[SetAccessor-1]: foo.md#setdefaultsuffix