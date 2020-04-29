---
title: "#1 알고리즘 연습 - 가운데 글자 가져오기(Python)"
date: "2019-01-09"
category: ['algorithm']
draft : False
---


## 가운데 글자 가져오기

단어 s의 가운데 글자를 반환하는 함수, solution을 만들어 보세요. 단어의 길이가 짝수라면 가운데 두글자를 반환하면 됩니다.

s는 길이가 1 이상, 100이하인 스트링입니다.

입출력 예

|s|	return|
|-|-------|
|abcde|	c |
|qwer|	we|


> _**문제풀이 IDEA**_
> _짝수의 특징 : 2의 배수로 2로 나눈 나머지가 0이 된다_


#### 내 풀이 🏆

```python

def solution(s):                #다소 평범한 코드
    if len(s)%2 == 1:           #일반적으로 홀수인지 판단하는 if조건문이다
        return(s[len(s)//2])   #그리고 홀수이면 중간값의 index를 계산해서 return해준다
    else:
        return(s[len(s)//2-1:len(s)//2+1])   #짝수일경우 반으로 나눈 몫의 값을 기준으로
                                                                  #-1 과 +1을 하여 충분한 slice범위를 가져온다

```


#### 다른 풀이 🏆



```python
def solution(str):   
    return str[(len(str)-1)//2:len(str)//2+1] 

    #str로 받은 문자열을 slice 하여 return해준다
    #  짝수의 경우 ( ex. "abcd")
    #   ⇨    str( (4-1)//2  : 4//2 +1 )
    #   ⇨    str(  1   :   3  )
    #   ⇨    "bc"

    #   홀수의 경우 ( ex. "abc")
    #    ⇨   str( (3-1)//2   : 3//2 + 1)
    #    ⇨   str(   1    :    2   )
    #    ⇨   "b"


    # 이렇듯 몫을 가져옴에 있어서 홀수와 짝수의 특성을 창의적으로 
    # (먼저 중간이라는 키워드에 속아 반으로 나누고 조작을 하는것이 아닌
    # 조작을 하고 반으로 나누는게 주요하다)
    # 생각하여 slice를 정교하게 해주면 간결한 코드를 짤 수 있다.
```

### 사용한 Python Syntax

* // : 나눗셈을 한 몫의 값을 가져온다

* s[index] : s의 index에 위치한 값을 가져온다

예를 들어 s = 'Hello, world!' 일때

|s[0]|s[:3]|s[2:5]|s[5:]|s[:]|s[::-1]|s[4::-1]
|-|-|--|--|---|---|---|
|'H'|'Hel'|'llo'|', world!'|'hello, world!'|'!dlrow ,olleh'|'olleh'



















특이하게 s[4::-1]을하면
처음부터 4번째까지(hello)를 역순으로 출력 해준다고 생각하자

* len(s) : s가 list or String일때 길이를 반환해준다