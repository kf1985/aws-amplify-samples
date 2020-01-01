# Amplify Sample

これは、Amplify向けの3層アプリケーションのサンプルテンプレートです。

![](/images/screenshot.gif)

このアプリケーションは、以下の2つの機能を有しています。

| 機能 | Amplifyカテゴリ | Amplify Vueコンポーネント | Vueテンプレート名 | 概要 | 
| --- | --- | --- | --- | --- |
| **ユーザ認証** | `Api` | `amplify-authenticator` | components/Authenticator.vue | ユーザログイン/ログアウトなどの **認証機能** とその画面を提供します。 |
| **データベース** | `Auth` | `amplify-connect` | components/Main.vue | **GraphQL** によるデータの登録/編集/削除を可能にします。 |

## クイックスタート

以下のボタンをクリックして、 **デプロイを開始** してください。

[![amplifybutton](https://oneclick.amplifyapp.com/button.svg)](https://console.aws.amazon.com/amplify/home#/deploy?repo=https://github.com/eijikominami/aws-amplify-samples)

## アーキテクチャ

このテンプレートが作成するAWSリソースのアーキテクチャ図は、以下の通りです。

![](/images/architecture.png)

ディレクトリ構成は以下の通りです。

```bash
.
├── amplify/
│   ├── .config/                        （自動生成）   クラウドの構成とユーザー設定を格納 (amplify init)
│   │   ├── local-aws-info.json         （自動生成）　　AWSクレデンシャルのプロファイル名を格納
│   │   ├── local-env-info.json         （自動生成）　　ローカルのディレクトリやIDEの設定を格納
│   │   └── project-config.json         （自動生成）　　プロジェクトの設定を格納       
│   ├── backend/
│   │   ├─── api
│   │   │   └── threetierappsample
│   │   │       └── schema.graphql      （編集可）    GraphQLのスキーマ
│   │   ├─── auth
│   │   │   └── threetierappsample
│   │   │       └── parameters.json     （編集可）    プロンプトで設定した内容を格納（amplify add auth）
│   │   ├──　amplify-meta.json          （自動生成）   AWSリソースの設定情報（Permission, Category）を格納, Gitリポジトリの管理対象外
│   │   └──　awscloudformation          （自動生成）   CloudFormationのルートスタック, Gitリポジトリの管理対象外   
│   ├──  #current-cloud-backend/       （自動生成）　　直近に取得したクラウド構成, Gitリポジトリの管理対象外
│   └──  team-provider-info.json       （自動生成）　　Environment設定（Permission, Category, CloudFormation Stack）を格納
└──  src/
    ├── App.vue                         （編集可）     Vueの単一コンポーネントファイル   
    ├── aws-exports.js                  （自動生成）   AWSリソースのエンドポイント等の情報を格納, Gitリポジトリの管理対象外 (amplify init)
    ├── components/                     （手動生成）   作成したVueコンポーネント
    │    ├──　Authenticator.vue         （自動生成）   認証画面コンポーネント
    │    └──　Main.vue                  （手動生成）   メインコンポーネント
    ├── graph/                          （自動生成）   GraphQL statement
    │    ├──　mutation.js               （自動生成）   
    │    ├──　queries.js                （自動生成）   
    │    ├──　schema.json               （自動生成）   
    │    └──　subcriptions.js           （自動生成）   
    ├── main.js                         （編集可）     Vueのエントリーポイント 
    ├── package.json                    （自動生成）   依存関係のあるライブラリの一覧
    └── router/                         （手動生成）   ルータコンポーネント
         └──　index.js                  （手動生成） 

```