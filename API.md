# API Reference <a name="API Reference" id="api-reference"></a>

## Constructs <a name="Constructs" id="constructs"></a>

### CrossBuild <a name="cdktf-local-build.CrossBuild" id="cdktflocalbuildcrossbuild"></a>

#### Initializers <a name="cdktf-local-build.CrossBuild.Initializer" id="cdktflocalbuildcrossbuildinitializer"></a>

```typescript
import { CrossBuild } from 'cdktf-local-build'

new CrossBuild(scope: Construct, name: string, config: CrossOptions)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| [`scope`](#cdktflocalbuildcrossbuildparameterscope)<span title="Required">*</span> | [`constructs.Construct`](#constructs.Construct) | *No description.* |
| [`name`](#cdktflocalbuildcrossbuildparametername)<span title="Required">*</span> | `string` | *No description.* |
| [`config`](#cdktflocalbuildcrossbuildparameterconfig)<span title="Required">*</span> | [`cdktf-local-build.CrossOptions`](#cdktf-local-build.CrossOptions) | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="cdktf-local-build.CrossBuild.parameter.scope" id="cdktflocalbuildcrossbuildparameterscope"></a>

- *Type:* [`constructs.Construct`](#constructs.Construct)

---

##### `name`<sup>Required</sup> <a name="cdktf-local-build.CrossBuild.parameter.name" id="cdktflocalbuildcrossbuildparametername"></a>

- *Type:* `string`

---

##### `config`<sup>Required</sup> <a name="cdktf-local-build.CrossBuild.parameter.config" id="cdktflocalbuildcrossbuildparameterconfig"></a>

- *Type:* [`cdktf-local-build.CrossOptions`](#cdktf-local-build.CrossOptions)

---



#### Properties <a name="Properties" id="properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| [`binaryPath`](#cdktflocalbuildcrossbuildpropertybinarypath)<span title="Required">*</span> | `string` | *No description.* |
| [`projectName`](#cdktflocalbuildcrossbuildpropertyprojectname)<span title="Required">*</span> | `string` | *No description.* |

---

##### `binaryPath`<sup>Required</sup> <a name="cdktf-local-build.CrossBuild.property.binaryPath" id="cdktflocalbuildcrossbuildpropertybinarypath"></a>

```typescript
public readonly binaryPath: string;
```

- *Type:* `string`

---

##### `projectName`<sup>Required</sup> <a name="cdktf-local-build.CrossBuild.property.projectName" id="cdktflocalbuildcrossbuildpropertyprojectname"></a>

```typescript
public readonly projectName: string;
```

- *Type:* `string`

---


### DockerBuild <a name="cdktf-local-build.DockerBuild" id="cdktflocalbuilddockerbuild"></a>

#### Initializers <a name="cdktf-local-build.DockerBuild.Initializer" id="cdktflocalbuilddockerbuildinitializer"></a>

```typescript
import { DockerBuild } from 'cdktf-local-build'

new DockerBuild(scope: Construct, name: string, __2: DockerBuildOptions)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| [`scope`](#cdktflocalbuilddockerbuildparameterscope)<span title="Required">*</span> | [`constructs.Construct`](#constructs.Construct) | *No description.* |
| [`name`](#cdktflocalbuilddockerbuildparametername)<span title="Required">*</span> | `string` | *No description.* |
| [`__2`](#cdktflocalbuilddockerbuildparameter2)<span title="Required">*</span> | [`cdktf-local-build.DockerBuildOptions`](#cdktf-local-build.DockerBuildOptions) | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="cdktf-local-build.DockerBuild.parameter.scope" id="cdktflocalbuilddockerbuildparameterscope"></a>

- *Type:* [`constructs.Construct`](#constructs.Construct)

---

##### `name`<sup>Required</sup> <a name="cdktf-local-build.DockerBuild.parameter.name" id="cdktflocalbuilddockerbuildparametername"></a>

- *Type:* `string`

---

##### `__2`<sup>Required</sup> <a name="cdktf-local-build.DockerBuild.parameter.__2" id="cdktflocalbuilddockerbuildparameter2"></a>

- *Type:* [`cdktf-local-build.DockerBuildOptions`](#cdktf-local-build.DockerBuildOptions)

---





### DockerizedBuild <a name="cdktf-local-build.DockerizedBuild" id="cdktflocalbuilddockerizedbuild"></a>

#### Initializers <a name="cdktf-local-build.DockerizedBuild.Initializer" id="cdktflocalbuilddockerizedbuildinitializer"></a>

```typescript
import { DockerizedBuild } from 'cdktf-local-build'

new DockerizedBuild(scope: Construct, name: string, options: DockerizedBuildOptions)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| [`scope`](#cdktflocalbuilddockerizedbuildparameterscope)<span title="Required">*</span> | [`constructs.Construct`](#constructs.Construct) | *No description.* |
| [`name`](#cdktflocalbuilddockerizedbuildparametername)<span title="Required">*</span> | `string` | *No description.* |
| [`options`](#cdktflocalbuilddockerizedbuildparameteroptions)<span title="Required">*</span> | [`cdktf-local-build.DockerizedBuildOptions`](#cdktf-local-build.DockerizedBuildOptions) | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="cdktf-local-build.DockerizedBuild.parameter.scope" id="cdktflocalbuilddockerizedbuildparameterscope"></a>

- *Type:* [`constructs.Construct`](#constructs.Construct)

---

##### `name`<sup>Required</sup> <a name="cdktf-local-build.DockerizedBuild.parameter.name" id="cdktflocalbuilddockerizedbuildparametername"></a>

- *Type:* `string`

---

##### `options`<sup>Required</sup> <a name="cdktf-local-build.DockerizedBuild.parameter.options" id="cdktflocalbuilddockerizedbuildparameteroptions"></a>

- *Type:* [`cdktf-local-build.DockerizedBuildOptions`](#cdktf-local-build.DockerizedBuildOptions)

---





### DockerizedCargoBuild <a name="cdktf-local-build.DockerizedCargoBuild" id="cdktflocalbuilddockerizedcargobuild"></a>

Builds a binary using cargo inside a docker container.

It is built to support https://github.com/awslabs/aws-lambda-rust-runtime

#### Initializers <a name="cdktf-local-build.DockerizedCargoBuild.Initializer" id="cdktflocalbuilddockerizedcargobuildinitializer"></a>

```typescript
import { DockerizedCargoBuild } from 'cdktf-local-build'

new DockerizedCargoBuild(scope: Construct, name: string, options: CargoOptions)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| [`scope`](#cdktflocalbuilddockerizedcargobuildparameterscope)<span title="Required">*</span> | [`constructs.Construct`](#constructs.Construct) | *No description.* |
| [`name`](#cdktflocalbuilddockerizedcargobuildparametername)<span title="Required">*</span> | `string` | *No description.* |
| [`options`](#cdktflocalbuilddockerizedcargobuildparameteroptions)<span title="Required">*</span> | [`cdktf-local-build.CargoOptions`](#cdktf-local-build.CargoOptions) | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="cdktf-local-build.DockerizedCargoBuild.parameter.scope" id="cdktflocalbuilddockerizedcargobuildparameterscope"></a>

- *Type:* [`constructs.Construct`](#constructs.Construct)

---

##### `name`<sup>Required</sup> <a name="cdktf-local-build.DockerizedCargoBuild.parameter.name" id="cdktflocalbuilddockerizedcargobuildparametername"></a>

- *Type:* `string`

---

##### `options`<sup>Required</sup> <a name="cdktf-local-build.DockerizedCargoBuild.parameter.options" id="cdktflocalbuilddockerizedcargobuildparameteroptions"></a>

- *Type:* [`cdktf-local-build.CargoOptions`](#cdktf-local-build.CargoOptions)

---



#### Properties <a name="Properties" id="properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| [`binaryPath`](#cdktflocalbuilddockerizedcargobuildpropertybinarypath)<span title="Required">*</span> | `string` | *No description.* |

---

##### `binaryPath`<sup>Required</sup> <a name="cdktf-local-build.DockerizedCargoBuild.property.binaryPath" id="cdktflocalbuilddockerizedcargobuildpropertybinarypath"></a>

```typescript
public readonly binaryPath: string;
```

- *Type:* `string`

---


### NullProvider <a name="cdktf-local-build.NullProvider" id="cdktflocalbuildnullprovider"></a>

Represents a {@link https://www.terraform.io/docs/providers/null null}.

#### Initializers <a name="cdktf-local-build.NullProvider.Initializer" id="cdktflocalbuildnullproviderinitializer"></a>

```typescript
import { NullProvider } from 'cdktf-local-build'

new NullProvider(scope: Construct, id: string, config?: NullProviderConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| [`scope`](#cdktflocalbuildnullproviderparameterscope)<span title="Required">*</span> | [`constructs.Construct`](#constructs.Construct) | The scope in which to define this construct. |
| [`id`](#cdktflocalbuildnullproviderparameterid)<span title="Required">*</span> | `string` | The scoped construct ID. |
| [`config`](#cdktflocalbuildnullproviderparameterconfig) | [`@cdktf/provider-null.NullProviderConfig`](#@cdktf/provider-null.NullProviderConfig) | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="cdktf-local-build.NullProvider.parameter.scope" id="cdktflocalbuildnullproviderparameterscope"></a>

- *Type:* [`constructs.Construct`](#constructs.Construct)

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="cdktf-local-build.NullProvider.parameter.id" id="cdktflocalbuildnullproviderparameterid"></a>

- *Type:* `string`

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Optional</sup> <a name="cdktf-local-build.NullProvider.parameter.config" id="cdktflocalbuildnullproviderparameterconfig"></a>

- *Type:* [`@cdktf/provider-null.NullProviderConfig`](#@cdktf/provider-null.NullProviderConfig)

---

#### Methods <a name="Methods" id="methods"></a>

| **Name** | **Description** |
| --- | --- |
| [`resetAlias`](#cdktflocalbuildnullproviderresetalias) | *No description.* |

---

##### `resetAlias` <a name="cdktf-local-build.NullProvider.resetAlias" id="cdktflocalbuildnullproviderresetalias"></a>

```typescript
public resetAlias()
```


#### Properties <a name="Properties" id="properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| [`aliasInput`](#cdktflocalbuildnullproviderpropertyaliasinput) | `string` | *No description.* |
| [`alias`](#cdktflocalbuildnullproviderpropertyalias) | `string` | *No description.* |

---

##### `aliasInput`<sup>Optional</sup> <a name="cdktf-local-build.NullProvider.property.aliasInput" id="cdktflocalbuildnullproviderpropertyaliasinput"></a>

```typescript
public readonly aliasInput: string;
```

- *Type:* `string`

---

##### `alias`<sup>Optional</sup> <a name="cdktf-local-build.NullProvider.property.alias" id="cdktflocalbuildnullproviderpropertyalias"></a>

```typescript
public readonly alias: string;
```

- *Type:* `string`

---

#### Constants <a name="Constants" id="constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| [`tfResourceType`](#cdktflocalbuildnullproviderpropertytfresourcetype)<span title="Required">*</span> | `string` | *No description.* |

---

##### `tfResourceType` <a name="cdktf-local-build.NullProvider.property.tfResourceType" id="cdktflocalbuildnullproviderpropertytfresourcetype"></a>

- *Type:* `string`

---

## Structs <a name="Structs" id="structs"></a>

### CargoOptions <a name="cdktf-local-build.CargoOptions" id="cdktflocalbuildcargooptions"></a>

#### Initializer <a name="[object Object].Initializer" id="object-objectinitializer"></a>

```typescript
import { CargoOptions } from 'cdktf-local-build'

const cargoOptions: CargoOptions = { ... }
```

#### Properties <a name="Properties" id="properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| [`cwd`](#cdktflocalbuildcargooptionspropertycwd)<span title="Required">*</span> | `string` | The working directory to run the command in. |
| [`projectName`](#cdktflocalbuildcargooptionspropertyprojectname)<span title="Required">*</span> | `string` | Name value in the Cargo.toml. |
| [`arch`](#cdktflocalbuildcargooptionspropertyarch) | `string` | Architecture of the binary to build. |
| [`dependsOn`](#cdktflocalbuildcargooptionspropertydependson) | [`cdktf.ITerraformDependable`](#cdktf.ITerraformDependable)[] | *No description.* |
| [`lifecycle`](#cdktflocalbuildcargooptionspropertylifecycle) | [`cdktf.TerraformResourceLifecycle`](#cdktf.TerraformResourceLifecycle) | *No description.* |
| [`provider`](#cdktflocalbuildcargooptionspropertyprovider) | [`cdktf.TerraformProvider`](#cdktf.TerraformProvider) | *No description.* |
| [`rustVersion`](#cdktflocalbuildcargooptionspropertyrustversion) | `string` | Rust version to compile with. |
| [`triggers`](#cdktflocalbuildcargooptionspropertytriggers) | {[ key: string ]: `string`} | *No description.* |

---

##### `cwd`<sup>Required</sup> <a name="cdktf-local-build.CargoOptions.property.cwd" id="cdktflocalbuildcargooptionspropertycwd"></a>

```typescript
public readonly cwd: string;
```

- *Type:* `string`

The working directory to run the command in.

Defaults to process.pwd().

---

##### `projectName`<sup>Required</sup> <a name="cdktf-local-build.CargoOptions.property.projectName" id="cdktflocalbuildcargooptionspropertyprojectname"></a>

```typescript
public readonly projectName: string;
```

- *Type:* `string`

Name value in the Cargo.toml.

---

##### `arch`<sup>Optional</sup> <a name="cdktf-local-build.CargoOptions.property.arch" id="cdktflocalbuildcargooptionspropertyarch"></a>

```typescript
public readonly arch: string;
```

- *Type:* `string`
- *Default:* "x86"

Architecture of the binary to build.

---

##### `dependsOn`<sup>Optional</sup> <a name="cdktf-local-build.CargoOptions.property.dependsOn" id="cdktflocalbuildcargooptionspropertydependson"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* [`cdktf.ITerraformDependable`](#cdktf.ITerraformDependable)[]

---

##### `lifecycle`<sup>Optional</sup> <a name="cdktf-local-build.CargoOptions.property.lifecycle" id="cdktflocalbuildcargooptionspropertylifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* [`cdktf.TerraformResourceLifecycle`](#cdktf.TerraformResourceLifecycle)

---

##### `provider`<sup>Optional</sup> <a name="cdktf-local-build.CargoOptions.property.provider" id="cdktflocalbuildcargooptionspropertyprovider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* [`cdktf.TerraformProvider`](#cdktf.TerraformProvider)

---

##### `rustVersion`<sup>Optional</sup> <a name="cdktf-local-build.CargoOptions.property.rustVersion" id="cdktflocalbuildcargooptionspropertyrustversion"></a>

```typescript
public readonly rustVersion: string;
```

- *Type:* `string`
- *Default:* 1.58

Rust version to compile with.

---

##### `triggers`<sup>Optional</sup> <a name="cdktf-local-build.CargoOptions.property.triggers" id="cdktflocalbuildcargooptionspropertytriggers"></a>

```typescript
public readonly triggers: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: `string`}

---

### CrossOptions <a name="cdktf-local-build.CrossOptions" id="cdktflocalbuildcrossoptions"></a>

#### Initializer <a name="[object Object].Initializer" id="object-objectinitializer"></a>

```typescript
import { CrossOptions } from 'cdktf-local-build'

const crossOptions: CrossOptions = { ... }
```

#### Properties <a name="Properties" id="properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| [`cwd`](#cdktflocalbuildcrossoptionspropertycwd)<span title="Required">*</span> | `string` | The working directory to run the command in. |
| [`projectName`](#cdktflocalbuildcrossoptionspropertyprojectname)<span title="Required">*</span> | `string` | Name value in the Cargo.toml. |
| [`arch`](#cdktflocalbuildcrossoptionspropertyarch) | `string` | Architecture of the binary to build. |
| [`dependsOn`](#cdktflocalbuildcrossoptionspropertydependson) | [`cdktf.ITerraformDependable`](#cdktf.ITerraformDependable)[] | *No description.* |
| [`lifecycle`](#cdktflocalbuildcrossoptionspropertylifecycle) | [`cdktf.TerraformResourceLifecycle`](#cdktf.TerraformResourceLifecycle) | *No description.* |
| [`provider`](#cdktflocalbuildcrossoptionspropertyprovider) | [`cdktf.TerraformProvider`](#cdktf.TerraformProvider) | *No description.* |
| [`triggers`](#cdktflocalbuildcrossoptionspropertytriggers) | {[ key: string ]: `string`} | *No description.* |

---

##### `cwd`<sup>Required</sup> <a name="cdktf-local-build.CrossOptions.property.cwd" id="cdktflocalbuildcrossoptionspropertycwd"></a>

```typescript
public readonly cwd: string;
```

- *Type:* `string`

The working directory to run the command in.

Defaults to process.pwd().

---

##### `projectName`<sup>Required</sup> <a name="cdktf-local-build.CrossOptions.property.projectName" id="cdktflocalbuildcrossoptionspropertyprojectname"></a>

```typescript
public readonly projectName: string;
```

- *Type:* `string`

Name value in the Cargo.toml.

---

##### `arch`<sup>Optional</sup> <a name="cdktf-local-build.CrossOptions.property.arch" id="cdktflocalbuildcrossoptionspropertyarch"></a>

```typescript
public readonly arch: string;
```

- *Type:* `string`
- *Default:* "x86"

Architecture of the binary to build.

---

##### `dependsOn`<sup>Optional</sup> <a name="cdktf-local-build.CrossOptions.property.dependsOn" id="cdktflocalbuildcrossoptionspropertydependson"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* [`cdktf.ITerraformDependable`](#cdktf.ITerraformDependable)[]

---

##### `lifecycle`<sup>Optional</sup> <a name="cdktf-local-build.CrossOptions.property.lifecycle" id="cdktflocalbuildcrossoptionspropertylifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* [`cdktf.TerraformResourceLifecycle`](#cdktf.TerraformResourceLifecycle)

---

##### `provider`<sup>Optional</sup> <a name="cdktf-local-build.CrossOptions.property.provider" id="cdktflocalbuildcrossoptionspropertyprovider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* [`cdktf.TerraformProvider`](#cdktf.TerraformProvider)

---

##### `triggers`<sup>Optional</sup> <a name="cdktf-local-build.CrossOptions.property.triggers" id="cdktflocalbuildcrossoptionspropertytriggers"></a>

```typescript
public readonly triggers: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: `string`}

---

### DockerBuildOptions <a name="cdktf-local-build.DockerBuildOptions" id="cdktflocalbuilddockerbuildoptions"></a>

#### Initializer <a name="[object Object].Initializer" id="object-objectinitializer"></a>

```typescript
import { DockerBuildOptions } from 'cdktf-local-build'

const dockerBuildOptions: DockerBuildOptions = { ... }
```

#### Properties <a name="Properties" id="properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| [`cwd`](#cdktflocalbuilddockerbuildoptionspropertycwd)<span title="Required">*</span> | `string` | *No description.* |
| [`tag`](#cdktflocalbuilddockerbuildoptionspropertytag)<span title="Required">*</span> | `string` | *No description.* |
| [`auth`](#cdktflocalbuilddockerbuildoptionspropertyauth) | [`cdktf-local-build.RegistryAuth`](#cdktf-local-build.RegistryAuth) | *No description.* |
| [`dockerfile`](#cdktflocalbuilddockerbuildoptionspropertydockerfile) | `string` | *No description.* |
| [`push`](#cdktflocalbuilddockerbuildoptionspropertypush) | `boolean` | *No description.* |

---

##### `cwd`<sup>Required</sup> <a name="cdktf-local-build.DockerBuildOptions.property.cwd" id="cdktflocalbuilddockerbuildoptionspropertycwd"></a>

```typescript
public readonly cwd: string;
```

- *Type:* `string`

---

##### `tag`<sup>Required</sup> <a name="cdktf-local-build.DockerBuildOptions.property.tag" id="cdktflocalbuilddockerbuildoptionspropertytag"></a>

```typescript
public readonly tag: string;
```

- *Type:* `string`

---

##### `auth`<sup>Optional</sup> <a name="cdktf-local-build.DockerBuildOptions.property.auth" id="cdktflocalbuilddockerbuildoptionspropertyauth"></a>

```typescript
public readonly auth: RegistryAuth;
```

- *Type:* [`cdktf-local-build.RegistryAuth`](#cdktf-local-build.RegistryAuth)

---

##### `dockerfile`<sup>Optional</sup> <a name="cdktf-local-build.DockerBuildOptions.property.dockerfile" id="cdktflocalbuilddockerbuildoptionspropertydockerfile"></a>

```typescript
public readonly dockerfile: string;
```

- *Type:* `string`

---

##### `push`<sup>Optional</sup> <a name="cdktf-local-build.DockerBuildOptions.property.push" id="cdktflocalbuilddockerbuildoptionspropertypush"></a>

```typescript
public readonly push: boolean;
```

- *Type:* `boolean`

---

### DockerizedBuildOptions <a name="cdktf-local-build.DockerizedBuildOptions" id="cdktflocalbuilddockerizedbuildoptions"></a>

#### Initializer <a name="[object Object].Initializer" id="object-objectinitializer"></a>

```typescript
import { DockerizedBuildOptions } from 'cdktf-local-build'

const dockerizedBuildOptions: DockerizedBuildOptions = { ... }
```

#### Properties <a name="Properties" id="properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| [`command`](#cdktflocalbuilddockerizedbuildoptionspropertycommand)<span title="Required">*</span> | `string` | The command to run. |
| [`cwd`](#cdktflocalbuilddockerizedbuildoptionspropertycwd)<span title="Required">*</span> | `string` | The working directory to run the command in. |
| [`copyBeforeRun`](#cdktflocalbuilddockerizedbuildoptionspropertycopybeforerun) | `boolean` | If set to true, the working directory will be copied to an asset directory. |
| [`dependsOn`](#cdktflocalbuilddockerizedbuildoptionspropertydependson) | [`cdktf.ITerraformDependable`](#cdktf.ITerraformDependable)[] | *No description.* |
| [`lifecycle`](#cdktflocalbuilddockerizedbuildoptionspropertylifecycle) | [`cdktf.TerraformResourceLifecycle`](#cdktf.TerraformResourceLifecycle) | *No description.* |
| [`provider`](#cdktflocalbuilddockerizedbuildoptionspropertyprovider) | [`cdktf.TerraformProvider`](#cdktf.TerraformProvider) | *No description.* |
| [`triggers`](#cdktflocalbuilddockerizedbuildoptionspropertytriggers) | {[ key: string ]: `string`} | *No description.* |
| [`image`](#cdktflocalbuilddockerizedbuildoptionspropertyimage)<span title="Required">*</span> | `string` | *No description.* |
| [`imageHomeDirectory`](#cdktflocalbuilddockerizedbuildoptionspropertyimagehomedirectory)<span title="Required">*</span> | `string` | *No description.* |
| [`setUser`](#cdktflocalbuilddockerizedbuildoptionspropertysetuser)<span title="Required">*</span> | `boolean` | *No description.* |
| [`platform`](#cdktflocalbuilddockerizedbuildoptionspropertyplatform) | `string` | *No description.* |

---

##### `command`<sup>Required</sup> <a name="cdktf-local-build.DockerizedBuildOptions.property.command" id="cdktflocalbuilddockerizedbuildoptionspropertycommand"></a>

```typescript
public readonly command: string;
```

- *Type:* `string`

The command to run.

---

##### `cwd`<sup>Required</sup> <a name="cdktf-local-build.DockerizedBuildOptions.property.cwd" id="cdktflocalbuilddockerizedbuildoptionspropertycwd"></a>

```typescript
public readonly cwd: string;
```

- *Type:* `string`

The working directory to run the command in.

Defaults to process.pwd(). If copyBeforeRun is set to true it will copy the working directory to an asset directory and take that as the base to run.

---

##### `copyBeforeRun`<sup>Optional</sup> <a name="cdktf-local-build.DockerizedBuildOptions.property.copyBeforeRun" id="cdktflocalbuilddockerizedbuildoptionspropertycopybeforerun"></a>

```typescript
public readonly copyBeforeRun: boolean;
```

- *Type:* `boolean`
- *Default:* true

If set to true, the working directory will be copied to an asset directory.

---

##### `dependsOn`<sup>Optional</sup> <a name="cdktf-local-build.DockerizedBuildOptions.property.dependsOn" id="cdktflocalbuilddockerizedbuildoptionspropertydependson"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* [`cdktf.ITerraformDependable`](#cdktf.ITerraformDependable)[]

---

##### `lifecycle`<sup>Optional</sup> <a name="cdktf-local-build.DockerizedBuildOptions.property.lifecycle" id="cdktflocalbuilddockerizedbuildoptionspropertylifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* [`cdktf.TerraformResourceLifecycle`](#cdktf.TerraformResourceLifecycle)

---

##### `provider`<sup>Optional</sup> <a name="cdktf-local-build.DockerizedBuildOptions.property.provider" id="cdktflocalbuilddockerizedbuildoptionspropertyprovider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* [`cdktf.TerraformProvider`](#cdktf.TerraformProvider)

---

##### `triggers`<sup>Optional</sup> <a name="cdktf-local-build.DockerizedBuildOptions.property.triggers" id="cdktflocalbuilddockerizedbuildoptionspropertytriggers"></a>

```typescript
public readonly triggers: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: `string`}

---

##### `image`<sup>Required</sup> <a name="cdktf-local-build.DockerizedBuildOptions.property.image" id="cdktflocalbuilddockerizedbuildoptionspropertyimage"></a>

```typescript
public readonly image: string;
```

- *Type:* `string`

---

##### `imageHomeDirectory`<sup>Required</sup> <a name="cdktf-local-build.DockerizedBuildOptions.property.imageHomeDirectory" id="cdktflocalbuilddockerizedbuildoptionspropertyimagehomedirectory"></a>

```typescript
public readonly imageHomeDirectory: string;
```

- *Type:* `string`

---

##### `setUser`<sup>Required</sup> <a name="cdktf-local-build.DockerizedBuildOptions.property.setUser" id="cdktflocalbuilddockerizedbuildoptionspropertysetuser"></a>

```typescript
public readonly setUser: boolean;
```

- *Type:* `boolean`

---

##### `platform`<sup>Optional</sup> <a name="cdktf-local-build.DockerizedBuildOptions.property.platform" id="cdktflocalbuilddockerizedbuildoptionspropertyplatform"></a>

```typescript
public readonly platform: string;
```

- *Type:* `string`

---

### RegistryAuth <a name="cdktf-local-build.RegistryAuth" id="cdktflocalbuildregistryauth"></a>

#### Initializer <a name="[object Object].Initializer" id="object-objectinitializer"></a>

```typescript
import { RegistryAuth } from 'cdktf-local-build'

const registryAuth: RegistryAuth = { ... }
```

#### Properties <a name="Properties" id="properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| [`password`](#cdktflocalbuildregistryauthpropertypassword)<span title="Required">*</span> | `string` | *No description.* |
| [`proxyEndpoint`](#cdktflocalbuildregistryauthpropertyproxyendpoint)<span title="Required">*</span> | `string` | *No description.* |
| [`userName`](#cdktflocalbuildregistryauthpropertyusername)<span title="Required">*</span> | `string` | *No description.* |

---

##### `password`<sup>Required</sup> <a name="cdktf-local-build.RegistryAuth.property.password" id="cdktflocalbuildregistryauthpropertypassword"></a>

```typescript
public readonly password: string;
```

- *Type:* `string`

---

##### `proxyEndpoint`<sup>Required</sup> <a name="cdktf-local-build.RegistryAuth.property.proxyEndpoint" id="cdktflocalbuildregistryauthpropertyproxyendpoint"></a>

```typescript
public readonly proxyEndpoint: string;
```

- *Type:* `string`

---

##### `userName`<sup>Required</sup> <a name="cdktf-local-build.RegistryAuth.property.userName" id="cdktflocalbuildregistryauthpropertyusername"></a>

```typescript
public readonly userName: string;
```

- *Type:* `string`

---



