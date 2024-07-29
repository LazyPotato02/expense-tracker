# Base image
FROM python:3.10

# Set environment variables
ENV PYTHONUNBUFFERED 1

# Set working directory
WORKDIR /app

# Install dependencies
COPY requirements.txt /app/
RUN pip install -r requirements.txt

# Copy the rest of the application code
COPY . .
RUN groupadd -g 999 docker && useradd -r -u 1000 -g docker myuser
USER myuser
# Expose the port the app runs on
EXPOSE 8000

# Start the application
CMD ["sh", "-c", "python manage.py migrate && python manage.py runserver 0.0.0.0:8000"]