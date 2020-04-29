---
title: "#7 알고리즘 연습 - 서울에서 김서방찾기(Python)"
date: "2019-01-18"
category: ['algorithm']
draft : False
---

## 서울에서 김서방찾기

String형 배열 seoul의 element중 Kim의 위치 x를 찾아, 김서방은 x에 있다는 String을 반환하는 함수, solution을 완성하세요. seoul에 Kim은 오직 한 번만 나타나며 잘못된 값이 입력되는 경우는 없습니다.


제한 사항

seoul은 길이 1 이상, 1000 이하인 배열입니다.
seoul의 원소는 길이 1 이상, 20 이하인 문자열입니다.
Kim은 반드시 seoul 안에 포함되어 있습니다.


입출력 예

|seoul|	return|
|-|-|
|[Jane, Kim]|	김서방은 1에 있다|


> _**문제풀이 IDEA**_
>반복문으로 순차적 탐색을 해서 index를 찾을 수 있는데
Python에서는 index라는 method를 제공해 주니까 이용해보자


#### 내 풀이 🏆

```python
def solution(seoul):
    return "김서방은 "+str(seoul.index("Kim"))+"에 있다"         

    #seoul이라는 list에서 index를 이용해 "Kim"을 찾아서 
    #return되는 index의 int값을 string으로 바꾸어
    #문자열의 + 를 이용해 return해준다

```

#### 다른 풀이 🏆

```python

def findKim(seoul):
    return "김서방은 {}에 있다".format(seoul.index('Kim'))

    #여기서  캐치할수 있는 부분은 문자열 formatting을 이용해
    #index메서드를 통해 반환되는 int값을 바로 넣어줄수 있다.
    #그리고 이렇게 적는것이 좀 더 코드의 가독성이 좋아진다  
```

#### 더 공부할 점

문자열 formatting의 개념은 알고 있었지만 사용에는 아직 익숙하지 않은 것 같다
알고있는 개념들을 이용해 코드를 좀더 이쁘게 짜도록 해야겠다.
