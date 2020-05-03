---
title: "멋쟁이사자처럼 팀스터디 보조자료 (git, python 자료형, python if-else, python loop)"
date: "2019-03-30"
category: ['멋쟁이사자처럼']
draft : False
---


팀스터디한다구 고생 많으십니다 여러분😂😂
하다가 모르는 것은 언제든 물어봐주세요!!

그럼 긴 이야기 각설하구 팀스터디 관련 자료로 바로 들어갑시다

오늘 할 주제는 크게
**_git의 간단한 사용법  + python 자료형( 시간이 난다면 조건문 + 반복문 )_**입니다.

***

### GIT

git은 버전관리시스템이다

>버전관리라는 말은 일반적으로 우리가 발표자료 및 파일을 만들때   
**_최종.ppt - 진짜최종.ppt - 이게 진짜진짜 최종.ppt _** 이렇게 만드는 것과 비슷하다.

우리의 코드들도 수정에 수정을 거쳐 작성 되기때문에 git을 통해 언제 어떤 버전이 수정되었는지 기록해주고 만일의 상황에 해당 버전으로 돌아가는 기능도 제공한다

GIT은 이처럼 간단해보이지만 사용하기 어려운 시스템이다
그럼 우리는 GIT의 기능중 많이 사용하는 기능에 대해 공부하도록 하자

***

### GIT사용하기(git bash를 이용하자)

기본적으로 우리가 작업하고 있는 작업 directory은 이런식으로 코드와 함께 
.(현재directory), ..(상위 directory)가 있다.


```bash

$ ls - al

total 1
drwxr-xr-x 1 jangc 197609  0 3월  30 14: 54 .
drwxr-xr-x 1 jangc 197609  0 3월  30 14: 47 ..
-rw-r--r-- 1 jangc 197609 14 3월  30 14: 54 test.py

$ git init
Initialized empty Git repository in C: / Users/jangc/Desktop/2019likelion/gitstudy/gittest/.git/


$ ls - al
total 5
drwxr-xr-x 1 jangc 197609  0 3월  30 14: 58 .
drwxr-xr-x 1 jangc 197609  0 3월  30 14: 47 ..
drwxr-xr-x 1 jangc 197609  0 3월  30 14: 58 .git
-rw-r--r-- 1 jangc 197609 14 3월  30 14: 54 test.py

#깃을 시작하겠다는 git init 을 입력해주면 initialized와 함께 .git이라는 숨김파일이 생성된다


$ git status
On branch master
No commits yet
Untracked files:
(use "git add <file>..." to include in what will be committed)
    test.py
nothing added to commit but untracked files present(use "git add" to track)


#git status로 상태를 보면 Untracked files로 아직 git시스템이 파일을 추적하지 못하고 있는 것을 알수 있다


$ git add .
$ git status

On branch master
No commits yet
Changes to be committed:
(use "git rm --cached <file>..." to unstage)
new file:   test.py

#git add . 에서 .은 현재 directory를 나타내는 애 이고(특정 파일 및 폴더를 지정해 줄수 있다) 위의 bash창을 보면 알수 있듯

#상태가 변경된것을 알수 있다.
#즉 git add 는 git을 commit(변경된 버전을 등록)하기 전 대기 상태로 보내는 거라 생각하자
#staging area로 보내는 건데 쉽게 그냥 대기상태이다

$ git commit - m "input message"
[master(root-commit) a778eab] input message
1 file changed, 1 insertion(+)
create mode 100644 test.py


#위의 코드에서는 git commit으로 변경된 버전을 등록하였다
#-m옵션을 통해서 버전에 대한 설명을 추가로 적어주고 
#local repository(내 컴퓨터 내 저장소)에 버전을 등록해 준것이다.


#⭐⭐그런데 이때! git config 관련 message가 뜨면서 commit이 안될 때가 있는데
$ git config --global user.name "name"
$ git config --global user.email email@address

#그럴때는 위의 명령어를 입력한 후에 다시 commit을 해주자
#위의 명령어는 local에서 commit을 할때 사용하는 정보 이다.


$ git log

commit a778eabf6c7196e6a765321479e09d086ea8ecec(HEAD -> master)
Author: chihun < jang.chihun@gmail.com >
Date:   Sat Mar 30 15: 06: 32 2019 + 0900
input message


#git log를 통해서 내가 등록한 버전들에 대한 정보를 확인 할수 있고.
#git reset commit_id --hard를 통해서 돌아갈수 있지만(외부 repo로 push하기전에)
#아직까지 우리는 그렇게 많이 쓰지 않으므로 넘어가자

```

### 나만의 git page 만들기

**github은 정적인 site만을 호스팅**해준다.
(정적인 site는 쉽게 생각해 정해진 내용만을 보여주는 site라고 생각하자)

따라서 뒤에 우리가 배울 Django(동적인 site)는 github으로 호스팅 할수 없다

그리고 호스팅을 위해서는 기본적으로 index.html page가 저장소에 있어야 
github이 page를 랜더링(띄워줄수) 해줄 수 있다. 

![https://1.bp.blogspot.com/-a3FxJAvECzw/XJ8LRWskR8I/AAAAAAAA75s/7kK6f_tjV8IWoBm5N5wA5_FvtRaA4CWKQCLcBGAs/s640/github%2Bpage%25EC%2584%25A4%25EC%25A0%25951.png](https://1.bp.blogspot.com/-a3FxJAvECzw/XJ8LRWskR8I/AAAAAAAA75s/7kK6f_tjV8IWoBm5N5wA5_FvtRaA4CWKQCLcBGAs/s640/github%2Bpage%25EC%2584%25A4%25EC%25A0%25951.png)
github에 만든 원격 저장소의 설정 탭으로 들어가기

![https://1.bp.blogspot.com/-Ltt2OmjwLGA/XJ8LRBOwL7I/AAAAAAAA75k/6kDt458C-x0a4RVMZJEHd4p-yT8dP7qwQCLcBGAs/s640/git%2Bpage%25EC%2584%25A4%25EC%25A0%25952.png](https://1.bp.blogspot.com/-Ltt2OmjwLGA/XJ8LRBOwL7I/AAAAAAAA75k/6kDt458C-x0a4RVMZJEHd4p-yT8dP7qwQCLcBGAs/s640/git%2Bpage%25EC%2584%25A4%25EC%25A0%25952.png)
밑으로 내려보면 GitHub Pages 가 있는데 master branch로 설정해준다

![https://4.bp.blogspot.com/-KfuNqbTsybM/XJ8LRChrS3I/AAAAAAAA75o/J1vfXp7myWAgzQ-7ExwAmDsSvcHk1q6ewCLcBGAs/s640/git%2Bpage%25EC%2584%25A4%25EC%25A0%25953.png](https://4.bp.blogspot.com/-KfuNqbTsybM/XJ8LRChrS3I/AAAAAAAA75o/J1vfXp7myWAgzQ-7ExwAmDsSvcHk1q6ewCLcBGAs/s640/git%2Bpage%25EC%2584%25A4%25EC%25A0%25953.png)
그럼 내 원격저장소의 github page가 만들어지고 URL주소가 할당된다



***

### Python 공부


#### bool 자료형

boolean이란 **참과 거짓**을 말한다
`True`, `False` 두 종류가 있다(⭐대문자에 유의⭐하자 소문자는 boolean이 아닌 변수로 취급)


bool의 다른 표현

`True` : 1 , 있는 자료형([1,2,3] 등)
`False` : 0 , None , 빈 자료형([],"")

***

#### 조건문

우선 조건문의 모양을 보고 넘어가자

우리는 저번시간에 `input()` 이라는 내장함수에 대해서 배웠다.
`input()`은 사용자의 입력을 받는 함수로 이를 이용해 간단한 코드를 짜보자


```python
a = int(input())  # input 으로 받은 값을 int(정수)형으로 변수 a에 저장

if (a > 5):  # 이때 ()를 생략해줘도 되지만 분명히 해주기 위해서 개인적으로는 표시한다
    print("a는 5보다 크네요!)

else:
    print("a는 5이거나 5보다 작네요!)
```

* 실행하고 우리가 7을 입력할때 : a는 5보다 크네요 출력

* 실행하고 우리가 5를 입력할떄 : a는 5이거나 5보다 작네요 출력

위의 예제 코드에서 보면 
⭐a가 5보다 클 때(즉  if옆에 있는 조건식이 True의 bool값일떄)
if문 밑에 위치한 `print` 코드가 동작한다⭐

그리고 `else`는 `print` 내용에서도 알 수 있듯 
⭐if문을 만족시키지 못하는 a가 올때⭐ 작동한다

*__if 랑 else 는 동시에 작동할수 없다__*


### ⭐조건문을 작성할때 조심해야 할것⭐

* indent(들여쓰기) : 앞으로 많은 코드에서 들여쓰기가 나올텐데 if와 else 등
특정 코드에 딸린 코드 같은 경우에는 tab1번 == space 4번 만큼 들여쓰기하여 작성해줘야한다

* : 콜론 표시하기 : 이후에 어떤 딸린 코드가 나오는 조건문,
앞으로 배울 반복문, 함수, 클래스 뒤에는 :이 반드시 붙어야한다

그럼 몇가지 예로 더 공부해보도록 하자



> * `elif` 를 사용한 조건문

```python
a = int(input())  # input 으로 받은 값을 int(정수)형으로 변수 a에 저장

if a > 10:
    print("a는 10보다 커요!")

elif a > 5:
    print("a는 5보다 크고 10보다 작거나 같아요!")

else: 
    print("a는 5보다 작거나 같아요!")
```

위의 코드를 보면 `elif`라는 것이 추가 되었는데 elif는 if-else 조건문에서 
**또 다른 조건**을 더 걸고 싶을때 사용한다
위에서는 elif를 1번만 사용했는데 **여러번 사용해도 무방**하다


> * 여러개의 if 를 사용한 조건문

```python
a = 10  

if a > 10:
    print("a는 10보다 커요!")

if (a > 5):
    print("a는 5보다 커요!")

if (a > 0):
    print("a는 0보다 커요!")

if (a = -1):
    print("a는 -1이에요!")


# 출력값: 
# a는 5보다 커요!
# a는 0보다 커요!
```

위의 코드는 4개의 if구문이 등장한다

위의 코드로 알수 있는 것은
1. else 는 **상황에 따라 생략**해도 된다

2. 각각의 **if-else는 서로에게 영향을 미치지 않는다**


> * 중복 if문
```python

if True:
    if False:
        print("hello")
    else:
        print("what?")
else:
    print("uh....")
```

위의 if는 `if문 안에 if-else`가 1개 더 위치한 것으로 
보다 촘촘한 조건으로 코드를 control할 수 있다.
구문의 레벨에따라 `indent`를 확실히 해주자


> * ⭐if문의 실행 흐름

조금 어려운 `if-elif `조건문

```python
a = 8 

if a > 10:
    print("a는 10보다 커요!")

elif a > 7:
    print("a는 7보다 커요!")

elif a > 5:
    print("a는 5보다 커요!")

# 출력값:
# a는 7보다 커요!

```


위의 코드를 보면 `a = 8`이라는 값인데

첫번째 if에서 조건에 해당하지 않는다(`False`)
두번째 elif에서는 조건에 해당한다(`True`)
세번째 elif에서도 조건에 해당한다(`True`)

하지만! **두번째에서 이미 작동을 해버렸으므로 세번째 elif는 거치지 않은 채** 바로 조건문을 끝낸다


> * ⭐조건을 결정하는 방법⭐

비교연산자: `< , > , == (같다) , != (같지않다) >= (크거나 같다, 순서유의), <= (작거나같다)`

`and`: 조건A and 조건B == > 조건 A와 B가 둘다 True 일때만 True(나머지 False)
`or`: 조건A or 조건B == > 조건A, 조건B 둘중 1개 이상만 True 이면 True(나머지 False)
`not`: not 조건A == > 조건A의 boolean 값을 부정함

> `x in 리스트, 튜플, 문자열` == > x가 해당 iterable한 자료형 안에 있는지 확인 하여 있으면 True


> * 조건문의 표현을 다르게하기

indent를 해주지 않고 한줄에 적는 방법도 있는데 잘 사용하지 않음

```python
if a > 0 : print("a는 0보다 크다")
else: print("a는 0이하다")
```

if-else를 합쳐서 다른 언어의 **삼항연산자** 처럼 1줄로 코드를 짤수 있다

**if 오른쪽 내용이 참**이면 **if왼쪽**을 가져오고
**if 오른쪽 내용이 거짓**이면 **else오른쪽**을 가져온다





```python
a = 0

print("a는 0") if a=0 else print("a는 0이 아님")

# 출력값:
# 0
```


### 반복문

python에서 반복문은 `while`과 `for`가 잇는데
**조건을 만족시킬때까지 반복문에 딸린 코드를 실행**시켜 주는것이다


> * 반복문 while

```python
a = 0

while a < 10:
    print("a는 10보다 작아요")
    a += 1   # a = a + 1과 같은 의미 

# 출력값 :
# a는 10보다 작아요
# a는 10보다 작아요
# a는 10보다 작아요
# a는 10보다 작아요
# a는 10보다 작아요
# a는 10보다 작아요
# a는 10보다 작아요
# a는 10보다 작아요
# a는 10보다 작아요
# a는 10보다 작아요
```

`while`의 조건식을 따져서 참일 경우에 while내부의 코드를 실행시켜준다

이때 `a+=1 `이 들어간 이유는 `a = 0` 이므로 a 값이 변화없이 while의 조건문을 거칠경우
**영-원히 a 는 10보다 작게되어** a는 10보다 작아요가 계속 출력되게 된다
(이를 *__무한 루프__*라고 한다)

따라서 `a+=1`처럼 원하는 만큼 조건을 제어해줄 수 있는 장치가 필요하다


> __*⭐break와 continue*__

#### break
```python
a = "break"

while True:
    if a == "break":
        print("break!")
        break
    else:
        print("나갈 수 없다")
# 출력값:
# break!
```

위의 코드를 보면 **while의 조건을 True로 설정**하여 **항상 반복문(loop)이 실행**되도록 하였다

그리고 반복문과 조건문을 이처럼 같이 사용할 수도 있으며 
각자에 속한 코드라는 표시를 들여쓰기를 통해 확실히 해줘야한다.

a의 값이 break이므로 if의 조건에 걸리게 되고 `print`를 실행한후에
`break`라는 명령어를 만난다
그리고 *__무한루프임에도 break는 1번만 출력__*이 된다

`break`명령어는 자기를 둘러싼 *__가장 가까운 반복문을 탈출__*하는 것이다.


#### continue
```python
a = "continue"
b = 1

while b == 1:              
    if a == "continue":     
        b -= 1             #b = b-1과 같은 의미로 b에서 1을 뺀 값을 다시 b에 저장
        print(b)
        continue
        print("b의 값이 변경되었습니다.")
    else:
        print("else가 실행되었습니다.")

# 출력값:
# 0
```

코드가 조금 복잡해 보이는데 차근차근 봐보자

일단 `while`문이 무한루프 도는 것을 막아주기 위해서 
`b를 1`로 설정하고 if 안에서 `b에서 1을 빼주었다`

그런데 여기서 처음 반복문이 돌아갈때 b도 1이고 a또한 continue이므로 if문 안으로 들어간다.
그리고 b의 연산이 이루어지고 `print(b)`로 b를 출력한 다음 `continue`를 만난다

출력값을 보면 `print("b의 값이...")`가 없는데 `continue`라는 코드를 만나게 되면
이후의 코드를 실행시키지 않고 다시 **반복문의 맨 처음으로 돌아가기** 때문이다
(**b는 지금 0이 되었으므로 반복문은 실행**되지 않는다)

따라서 continue는 만나는 순간 반복문의 제일 처음으로 돌아가는 것이다.


> __*중첩 반복문*__
```python
while True:
    while True:
        print("bad")
```

이런식으로 **중첩 반복문**을 사용할 수 있다.

하지만 3중 이상으로 넘어가는 경우 연산 속도의 저하를 가져오므로
중첩 반복문은 특수한 경우 아니면 3중 이상은 지양하자


> __*반복문 for*__

`iterable object`를 이용한 `for`
```python
mylist = [1,2,3,4,5]

for i in mylist:
    print("hello")

# 출력값:
# hello
# hello
# hello
# hello
# hello
```

위의 코드를 보면 `for`문 오른쪽에 i라는 변수를 설정해 
`mylist` 안에 있는 동안 반복문을 실행하자는 것이다

따라서 `i`는 차례대로 `1, 2, 3, 4, 5` 로 변하게 되고 각각의 차례에 `hello`를 출력해주게 된다

예제에서는 문자열을 출력해줬지만 일반적으로는 
`list`내의 i를 가지고 반복문을 이용해주는 경우가 많다

`print(i)`를 하게되면 `1 부터 5까지 출력`이 된다


> *__⭐range를 이용한 for__*

```python
for i in range(5):
    print(i)

# 출력값:

# 0
# 1
# 2
# 3
# 4
```

위의 코드를 보면 `range()`라는 내장함수를 이용하여 `for`문을 사용해줬다

range에 대해서 예를 통해 이해하자

`range`의 인자에 따른 출력값
```python
range(5)  == 0,1,2,3,4          #0부터 인자-1까지
range(1,4) == 1,2,3             #첫번째 인자 ~ 2번째인자-1
range(0,10,2) == 0,2,4,6,8      #첫번째 인자 ~ 2번째인자-1 인데 세번째 인자만큼 증가(등차수열)
```

> ⭐for도 while과 마찬가지로   
`break`, `continue` 그리고 중첩이 적용⭐된다



> ⭐List comprehension
`Syntax : [ (expression) for item in list if conditional ]`


```python
[ n for n in range(10) if x%2 ==0]

==>[0, 2, 4, 6, 8]

[ n + 1 for n in range(10) if x%2 ==0]

==>[1, 3, 5, 7, 9]

[ n + m    for n in [1,2,3]     for y in [1,2,3] ]

==>[2, 4, 6]
```

list의 요소를 생성할때 for문을 이용하여 생성하는 것으로 코드를 
python처럼 짤 수 있다는 면에서 알아두면 좋은 방법이다.