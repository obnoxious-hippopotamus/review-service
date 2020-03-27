FROM mysql:5.7 as builder

ARG MYSQL_ROOT_PASSWORD

# That file does the DB initialization but also runs mysql daemon, by removing the last line it will only init
RUN ["sed", "-i", "s/exec \"$@\"/echo \"not running $@\"/", "/usr/local/bin/docker-entrypoint.sh"]

COPY schema.sql /docker-entrypoint-initdb.d/

RUN ["/usr/local/bin/docker-entrypoint.sh", "mysqld", "--datadir", "/initialized-db"]

FROM mysql:5.7

COPY --from=builder /initialized-db /var/lib/mysql

EXPOSE 8000

ENV MYSQL_ROOT_PASSWORD="${MYSQL_ROOT_PASSWORD}"