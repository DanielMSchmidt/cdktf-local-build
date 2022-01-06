# API Reference <a name="API Reference" id="api-reference"></a>

## Constructs <a name="Constructs" id="constructs"></a>

### CargoBuild <a name="cdktf-local-build.CargoBuild" id="cdktflocalbuildcargobuild"></a>

Builds a binary using cargo inside a docker container.

It is built to support https://github.com/awslabs/aws-lambda-rust-runtime

#### Initializers <a name="cdktf-local-build.CargoBuild.Initializer" id="cdktflocalbuildcargobuildinitializer"></a>

```typescript
import { CargoBuild } from 'cdktf-local-build'

new CargoBuild(scope: Construct, name: string, options: CargoOptions)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| [`scope`](#cdktflocalbuildcargobuildparameterscope)<span title="Required">*</span> | [`constructs.Construct`](#constructs.Construct) | *No description.* |
| [`name`](#cdktflocalbuildcargobuildparametername)<span title="Required">*</span> | `string` | *No description.* |
| [`options`](#cdktflocalbuildcargobuildparameteroptions)<span title="Required">*</span> | [`cdktf-local-build.CargoOptions`](#cdktf-local-build.CargoOptions) | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="cdktf-local-build.CargoBuild.parameter.scope" id="cdktflocalbuildcargobuildparameterscope"></a>

- *Type:* [`constructs.Construct`](#constructs.Construct)

---

##### `name`<sup>Required</sup> <a name="cdktf-local-build.CargoBuild.parameter.name" id="cdktflocalbuildcargobuildparametername"></a>

- *Type:* `string`

---

##### `options`<sup>Required</sup> <a name="cdktf-local-build.CargoBuild.parameter.options" id="cdktflocalbuildcargobuildparameteroptions"></a>

- *Type:* [`cdktf-local-build.CargoOptions`](#cdktf-local-build.CargoOptions)

---



#### Properties <a name="Properties" id="properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| [`binary`](#cdktflocalbuildcargobuildpropertybinary)<span title="Required">*</span> | `string` | *No description.* |

---

##### `binary`<sup>Required</sup> <a name="cdktf-local-build.CargoBuild.property.binary" id="cdktflocalbuildcargobuildpropertybinary"></a>

```typescript
public readonly binary: string;
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
| [`tfResourceType`](#cdktflocalbuildnullproviderpropertytfresourcetype)<span title="Required">*</span> | `string` | *No description.* |
| [`aliasInput`](#cdktflocalbuildnullproviderpropertyaliasinput) | `string` | *No description.* |
| [`alias`](#cdktflocalbuildnullproviderpropertyalias) | `string` | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="cdktf-local-build.NullProvider.property.tfResourceType" id="cdktflocalbuildnullproviderpropertytfresourcetype"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* `string`

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
| [`projectName`](#cdktflocalbuildcargooptionspropertyprojectname)<span title="Required">*</span> | `string` | *No description.* |
| [`arch`](#cdktflocalbuildcargooptionspropertyarch) | `string` | Architecture of the binary to build. |
| [`copyBeforeRun`](#cdktflocalbuildcargooptionspropertycopybeforerun) | `boolean` | If set to true, the working directory will be copied to an asset directory. |
| [`dependsOn`](#cdktflocalbuildcargooptionspropertydependson) | [`cdktf.ITerraformDependable`](#cdktf.ITerraformDependable)[] | *No description.* |
| [`lifecycle`](#cdktflocalbuildcargooptionspropertylifecycle) | [`cdktf.TerraformResourceLifecycle`](#cdktf.TerraformResourceLifecycle) | *No description.* |
| [`provider`](#cdktflocalbuildcargooptionspropertyprovider) | [`cdktf.TerraformProvider`](#cdktf.TerraformProvider) | *No description.* |
| [`triggers`](#cdktflocalbuildcargooptionspropertytriggers) | {[ key: string ]: `string`} \| [`cdktf.IResolvable`](#cdktf.IResolvable) | *No description.* |

---

##### `cwd`<sup>Required</sup> <a name="cdktf-local-build.CargoOptions.property.cwd" id="cdktflocalbuildcargooptionspropertycwd"></a>

```typescript
public readonly cwd: string;
```

- *Type:* `string`

The working directory to run the command in.

Defaults to process.pwd(). If copyBeforeRun is set to true it will copy the working directory to an asset directory and take that as the base to run.

---

##### `projectName`<sup>Required</sup> <a name="cdktf-local-build.CargoOptions.property.projectName" id="cdktflocalbuildcargooptionspropertyprojectname"></a>

```typescript
public readonly projectName: string;
```

- *Type:* `string`

---

##### `arch`<sup>Optional</sup> <a name="cdktf-local-build.CargoOptions.property.arch" id="cdktflocalbuildcargooptionspropertyarch"></a>

```typescript
public readonly arch: string;
```

- *Type:* `string`
- *Default:* "x86"

Architecture of the binary to build.

---

##### `copyBeforeRun`<sup>Optional</sup> <a name="cdktf-local-build.CargoOptions.property.copyBeforeRun" id="cdktflocalbuildcargooptionspropertycopybeforerun"></a>

```typescript
public readonly copyBeforeRun: boolean;
```

- *Type:* `boolean`
- *Default:* true

If set to true, the working directory will be copied to an asset directory.

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

##### `triggers`<sup>Optional</sup> <a name="cdktf-local-build.CargoOptions.property.triggers" id="cdktflocalbuildcargooptionspropertytriggers"></a>

```typescript
public readonly triggers: {[ key: string ]: string} | IResolvable;
```

- *Type:* {[ key: string ]: `string`} | [`cdktf.IResolvable`](#cdktf.IResolvable)

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



