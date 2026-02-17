# Tianhao Wang's Personal Website

This is the source code for my personal academic website, hosted at [tianhao.wang](https://tianhao.wang).

## Running Locally

This project requires:
- Ruby `4.0.1` (see `.ruby-version`)
- Bundler (latest)
- Node.js `25.6.1` (see `.nvmrc`)
- npm

## Clean Environment Contract

From first principles, a stable local environment for this repo should satisfy:
- Single architecture toolchain (Apple Silicon => `arm64` binaries)
- One primary package ecosystem (`/opt/homebrew` before `/usr/local`)
- Consistent Ruby dependency resolver (`bundle` from the same Ruby toolchain)
- Reproducible startup (`bundle + npm + jekyll` from a fixed command sequence, not ad-hoc shell state)

On Apple Silicon macOS, if you have both `/usr/local` and `/opt/homebrew` Ruby installed, prefer Homebrew Ruby:

```bash
export PATH="/opt/homebrew/opt/ruby/bin:/opt/homebrew/bin:$PATH"
```

1. **Clone the repository:**

    ```bash
    git clone https://github.com/vvv214/vvv214.github.io.git
    cd vvv214.github.io
    ```

2. **Install dependencies:**

    ```bash
    nvm use
    bundle install
    npm install
    ```

3. **Build JS once (or run watcher):**

    ```bash
    npm run build
    # optional while editing JS
    # npm run watch
    ```

4. **Serve with Jekyll:**

    ```bash
    bundle exec jekyll serve -l -H localhost --port 4000
    ```

    The site will be available at `http://localhost:4000`.

## Docker Fallback

If you do not want to manage local Ruby versions:

```bash
docker build -t tianhao-site .
docker run --rm -p 4000:4000 tianhao-site
```
