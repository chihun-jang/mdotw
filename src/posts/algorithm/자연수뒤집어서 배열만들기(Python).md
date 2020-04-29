---
title: "#28 알고리즘 연습 - 자연수 뒤집어서 배열 만들기(Python)"
date: "2019-05-07"
category: ['algorithm']
draft : False
---

## 자연수 뒤집어서 배열 만들기 

자연수 n을 뒤집어 각 자리 숫자를 원소로 가지는 배열 형태로 리턴해주세요. 예를들어 n이 12345이면 [5,4,3,2,1]을 리턴합니다.


제한 조건

n은 10,000,000,000이하인 자연수입니다.


입출력 예

|n|	return|
|-|-|
|12345	|[5,4,3,2,1]|



>__*문제풀이*__   
일단 자연수 상태에서는 가공이 힘드므로 str형태로 바꿔주고 
sort의 역이 아닌 받은 그자체의 뒤집은 배열이므로 reversed 를 이용해주어 뒤집은 다음 원소를 int로 변환한다



#### 내 풀이 🏆
```python
def solution(n):
    return [int(i) for i in list(reversed(str(n)))]
    # str로 바꾼 숫자를 reversed 로 뒤집어 reversed object를 만들어준다음 list처리를 해주는데

    #list의 원소들이 str 자료형이므로 문제에서 원하는대로 list comprehension 을 사용하여 int로 변환해준다
```

#### 다른 풀이 🏆
```python

def digit_reverse(n):
    return [int(i) for i in str(n)][::-1]  

    #해당 코드는 str를 list comprehension으로 돌며
    #int 로 변환해준다음 slicing 을 이용하여 뒤집어뒀다
```

#### 다른 풀이2 🏆
```python

def digit_reverse(n):
    return list(map(int, reversed(str(n))))

    # 파이썬에서 map 이라는 내장함수를 이용해서 해당 조건에 매핑되는 결과를 리턴했다.
```

