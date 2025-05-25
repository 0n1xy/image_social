# Sử dụng image Node.js chính thức
FROM node:20-alpine

# Thiết lập thư mục làm việc
WORKDIR /app

# Copy file cấu hình
COPY package.json yarn.lock ./

# Cài đặt dependencies
RUN yarn install --frozen-lockfile

# Copy toàn bộ source code
COPY . .

# Build TypeScript
RUN yarn build

# Thiết lập biến môi trường cho production
ENV NODE_ENV=production

# Mở cổng mặc định
EXPOSE 3000

# Lệnh khởi chạy app
CMD ["node", "dist/index.js"]
