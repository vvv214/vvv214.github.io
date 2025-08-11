# Use newer Ruby base image
FROM ruby:3.3

# Install system dependencies
RUN apt-get update && apt-get install -y \
    build-essential \
    zlib1g-dev \
    nodejs \
    npm

# Set working directory
WORKDIR /app

# Copy Gemfile and package.json first to leverage Docker cache
COPY Gemfile* package*.json ./

# Install gems and npm packages
RUN bundle install
RUN npm install

# Copy the rest of the application
COPY . .

# Build the javascript assets
RUN npm run build

EXPOSE 4000

# Just serve the Jekyll site with auto-regeneration enabled
CMD ["bundle", "exec", "jekyll", "serve", "--host", "0.0.0.0", "--livereload"]
