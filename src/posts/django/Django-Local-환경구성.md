---
title: "Django 로컬환경 꾸미기"
date: "2019-02-07"
category: ['Django']
draft : False
---


Django 로컬환경 꾸미기


> 로컬환경 주의사항

개발환경과 운영환경의 DB를 다르게 설정할 경우
운영 환경의 데이터를 개발환경으로 완벽하게 이전할수도 없으며
엔진의 성격차이로 인해 개발환경에서는 발견되지 않았던 버그가
운영환경에서의 더 엄격한 DB에서 실행되는 순간 발생할수 있기 때문에 통일 시키는게 좋다
책에서는 `Postgresql`을 추천한다


>❔ pip 는 파이썬 패키지 인덱스와 미러사이트에서 파이썬 패키지를 가져오는 도구이다 파이썬 패키지를 설치하고 관리하는데 이용한다.

easy_install 과 비슷하지만 더 많은 기능을 가지고있고 virtualenv를 지원한다
(우리는 `python -m venv` 모듈을 이용하여 가상환경을 조성한다)

장고의 설치는 `pip`와 `requirement`를 이용해서 할수 있는데
`requirements`는 패키지 설치목록을 적어놓은 것이다.


> 가상환경

virtualenv(우리의 경우 venv)는 파이썬 패키지 의존성을 유지할수 있게 독립된 파이썬 환경을 제공하는 도구
한개이상의 프로젝트를 진행할때 프로젝트마다 다른 버전의 라이브러리들이 충돌을 내는걸 방지
(virtualenv를 쓰는경우 virtualenvwrapper-win 을 찾아서 가상환경 실행 명령어를 줄여보자)

>버전컨트롤 시스템 사용하기

버전컨트롤 시스템은 리비전컨트롤 또는 소스컨트롤로 부르는데
코드의 변경내용을 기록하려면 버전컨트롤 시스템을 이용해야한다

일반적으로 우리는 git을 사용하겠다.

단순히 로그 카피만 하는것이 아닌 백업을 위한 호스팅을 이용하는데 깃허브와 비트버킷을 이용할 수 있다.



> 동일한 환경으로 개발과 운영환경을 맞출수 있도록 하자

1. 같은 운영체재

2. 버전 및 셋업이 같은 파이썬

3. 개발자간의 셋업 통일

일반적으로 동일한 개발환경 구성을 위해 이용하는 방법으로 ~~vagrant~~와 virtualbox가 있다.

요즘에는 도커 컨테이너를 이용해서 독립환경을 만들면 VM보다 더 가벼운 환경에서 개발이 진행가능하다.

출처 - two scoops of django