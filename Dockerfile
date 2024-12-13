FROM public.ecr.aws/docker/library/node:20

RUN apt-get update && apt-get install -y jq

RUN groupadd -g 1201 seluser && \
    useradd seluser -u 1200 -g 1201 -m -s /bin/bash

ADD . /suite
WORKDIR /suite

RUN npm install && \
    chown -R seluser:seluser /suite

USER seluser

CMD ["bash", "entrypoint.sh"]