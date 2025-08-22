# Tianhao Wang's Personal Website

This is the source code for my personal academic website, hosted at [tianhao.wang](https://tianhao.wang).

## Running Locally

To test changes locally, you'll need to have Ruby, Bundler, and Node.js installed.

1.  **Clone the repository:**

    ```bash
    git clone https://github.com/vvv214/vvv214.github.io.git
    cd vvv214.github.io
    ```

2.  **Install dependencies:**

    ```bash
    bundle install
    npm install
    ```

3.  **Build the site and serve locally:**

    In one terminal, run the Jekyll server:

    ```bash
    bundle exec jekyll serve -l -H localhost
    ```

    In another terminal, watch for JavaScript changes:

    ```bash
    npm run watch
    ```

    The site will be available at `http://localhost:4000`.