FROM python:3.11.6

EXPOSE 8000

WORKDIR /app

COPY requirements.txt .

RUN pip install --upgrade pip setuptools
RUN pip install --no-cache-dir -r requirements.txt

COPY . .

