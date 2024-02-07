FROM golang:alpine as builder

WORKDIR /usr/src/go

RUN go mod init fullcycle/hello

COPY ./hello.go .

RUN go build .

FROM scratch

COPY --from=builder /usr/src/go/hello .

CMD [ "/hello"]