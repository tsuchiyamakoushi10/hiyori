# 独自ドメイン（hiyori-houkan.com）の接続手順

ドメイン：エックスサーバーで取得
つなぎ方：ドメインの管理先を Vercel にまかせる（ネームサーバーを Vercel に変える）

サイトのプログラムは変更不要。正式なURL（sitemap・OGP・構造化データ）は Vercel の本番ドメインを自動で使う。

---

## 1. Vercel でドメインを追加する

1. Vercel のプロジェクト →「Settings」→ 左の「Domains」
2. 「Add Domain」を押して、次を入力

```
hiyori-houkan.com
```

3. 「www 付きも追加して転送する」（推奨）を選ぶ
4. 追加したドメインの欄に「Invalid Configuration」と出るので、「Nameservers」のタブ（または「Vercel DNS」）を選ぶ
5. 表示されたネームサーバー2つを確認する（ふつうは下の2つ。画面の値が違えば画面のほうを使う）

```
ns1.vercel-dns.com
```

```
ns2.vercel-dns.com
```

---

## 2. エックスサーバーでネームサーバーを変える

1. Xserverアカウントにログイン

```
https://secure.xserver.ne.jp/xapanel/login/xserver/
```

2. 上のメニュー「ドメイン」→ hiyori-houkan.com の行の「ドメインパネル」（または「設定」）
3. 「ネームサーバー設定」を開く
4. 「その他のサービスで利用する」を選び、次のように入力する
   - ネームサーバー1：`ns1.vercel-dns.com`
   - ネームサーバー2：`ns2.vercel-dns.com`
   - ネームサーバー3〜5：空欄
5. 「確認画面へ進む」→「設定を変更する」

---

## 3. 待つ

- 反映には数時間（長いと24〜48時間）
- Vercel の「Domains」で「Valid Configuration」（緑）になれば完了。https も自動で設定される

---

## 4. 古いアドレスからの転送（必ずやる）

名刺のQRコードなど、すでに配ったものが古いアドレスを指していても新しいドメインに移るようにする。

1. 「Domains」の一覧で `〜.vercel.app` の行の「Edit」
2. 「Redirect to」で次を選んで保存（古いアドレスは消さない）

```
hiyori-houkan.com
```

---

## 5. 本番を作り直す

「Deployments」→ 本番（Production）のいちばん上の行の「…」→「Redeploy」

---

## 5-2. 正式なアドレスを指定する（sitemap などが古いアドレスのままのとき）

正式なアドレスは www 付きにした。Vercel が古いアドレスを渡し続けることがあるので、はっきり指定する。

1. Vercel →「Settings」→「Environment Variables」→ 追加
2. Key（名前）

```
NEXT_PUBLIC_SITE_URL
```

3. Value（値）

```
https://www.hiyori-houkan.com
```

4. Environments は **Production だけ**にチェック（Preview は外す）→「Save」
5. 「Deployments」→ いちばん上の Production の行の「…」→「Redeploy」
   - 「Use existing Build Cache」のチェックを**外してから** Redeploy

---

## 6. Google 検索・AI検索への登録

`docs/search-console.md` を参照。

---

## 7. 終わったら

Claude に「登録できた」と伝
---

## メモ：あとでメールを使いたくなったら

`info@hiyori-houkan.com` などのメールを使う場合は、Vercel の「Domains」→ hiyori-houkan.com の DNS 設定に、メールサービスの指定する値（MX レコードなど）を追加する。
