# Use newer Ruby base image
FROM ruby:3.1

# Install system dependencies
RUN apt-get update && apt-get install -y \
    build-essential \
    zlib1g-dev \
    nodejs

# Set working directory
WORKDIR /app

# Copy Gemfile first to leverage Docker cache
COPY Gemfile* ./

# Install Jekyll and dependencies with specific versions
RUN gem install bundler -v 2.4.22
RUN bundle install

# Copy the rest of the application
COPY . .

EXPOSE 4000

# Just serve the Jekyll site with auto-regeneration enabled
CMD ["bundle", "exec", "jekyll", "serve", "--host", "0.0.0.0", "--watch"]