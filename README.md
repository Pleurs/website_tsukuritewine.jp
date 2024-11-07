# ツクリテ Wine Marche

「ツクリテwine marche」サイトのソースコードを管理するリポジトリです。

## 特徴

- 日本ワインを旅するECメディア「ツクリテwine marche」の公式サイト
- ワインの詳細情報や販売ページへのリンク


## 環境構築

このプロジェクトは静的な Web ページのため、特別な開発環境のセットアップは不要です。

### インストールと実行

1. リポジトリをクローンします。
   ```bash
   git clone https://github.com/Pleurs/website_tsukuritewine.jp.git
   cd tsukurite-wine-marche
   ```
2. `index.html` をブラウザで開くことで、ローカル環境でサイトを確認できます。

## デプロイ方法とワークフロー

このプロジェクトでは、GitHub の特定のブランチに変更をプッシュすることで、Netlify によって自動的にデプロイが行われます。

### 開発および本番デプロイの手順

1. **開発ブランチにプッシュ**  
   新しい変更や機能を追加する際は、まず `develop` ブランチにプッシュします。
   ```bash
   git add .
   git commit -m "Update content"
   git push origin develop
   ```
   プッシュすると、Netlify が `develop` ブランチに基づいて開発サイトを自動的に更新します。

2. **開発サイトでの確認**  
   開発サイト URL にアクセスして変更内容を確認します:
   - **開発サイト URL**: `https://develop.tsukuritewine.jp/`

3. **本番サイトへの反映**  
   開発サイトでの確認が完了し、問題がない場合、`develop` ブランチの内容を `main` ブランチにマージします。
   ```bash
   git checkout main
   git merge develop
   git push origin main
   ```
   これにより、Netlify が `main` ブランチに基づいて本番サイトを自動的に更新します。

4. **本番サイト URL**  
   - **本番サイト URL**: `https://www.tsukuritewine.jp/`

## ディレクトリ構成

- `/assets` - CSS や画像、JavaScript ファイル
- `index.html` - メインの HTML ファイル

## 作者

- ツクリテ Wine Marche チーム
