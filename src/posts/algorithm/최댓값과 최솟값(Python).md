---
title: "#33 알고리즘 연습 - Min Max(Python)"
date: "2019-05-15"
category: ['algorithm']
draft : False
---


문자열 s에는 공백으로 구분된 숫자들이 저장되어 있습니다. 
str에 나타나는 숫자 중 최소값과 최대값을 찾아 이를 (최소값) (최대값)형태의 문자열을 반환하는 함수, solution을 완성하세요.
예를들어 s가 1 2 3 4라면 1 4를 리턴하고, -1 -2 -3 -4라면 -4 -1을 리턴하면 됩니다.


제한 조건

s에는 둘 이상의 정수가 공백으로 구분되어 있습니다.


입출력 예

|s|	return|
|-|-|
|1 2 3 4|	1 4|
|-1 -2 -3 -4	|-4 -1|
|-1 -1|	-1 -1|


>__*문제풀이*__   
문자열을 받아서 max와 min을 찾아내기 위해서는 list를 써주면 손쉽게 쓸 수 있을 것 같다.


#### 내 풀이 🏆
```python
def solution(s):
    a = [int(i) for i in s.split(" ")]     
    #받은 문자열을 공백을 기준으로 나누어 주고 해당 list를 돌며 원소들을

    #int로 형변환 하여 list comprehension사용해준다
    return str(min(a)) + " " + str(max(a))  #min과 max를 이용해서 최소 최대를 뽑아오고 str로 바꾸어 + 연산처리 해준다 

```