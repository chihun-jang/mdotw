---
title: "#23 알고리즘 연습 - 자릿수더하기(Python)"
date: "2019-04-15"
category: ['algorithm']
draft : False
---


## 자릿수더하기

자연수 N이 주어지면, N의 각 자릿수의 합을 구해서 
return 하는 solution 함수를 만들어 주세요.
예를들어 N = 123이면 1 + 2 + 3 = 6을 return 하면 됩니다.


제한사항

N의 범위 : 100,000,000 이하의 자연수


입출력 예

|N|	answer|
|-|-|
|123|	6|
|987|	24|


입출력 예 설명

입출력 예 #1
문제의 예시와 같습니다.

입출력 예 #2
9 + 8 + 7 = 24이므로 24를 return 하면 됩니다.


>__*문제풀이*__   
사실 이 문제를 푸는데는 그렇게 어렵지 않다
숫자는 각 index별로 slice할수 없기 때문에 숫자를 str형으로 형변환 해서 합의 값을 return 해주면 된다.


#### 내 풀이 🏆
```python

def solution(n):
    return sum([int(i) for i in str(n)])   #list comp로 만들어 준다음 sum으로 바로 더해줬다.
```


#### 다른 풀이🏆
```python
def sum_digit(number):
    if number < 10:     #일의 자리만 존재할때는 바로 return해준다.
        return number;
    return (number % 10) + sum_digit(number // 10) 

#나머지를 return 값으로 돌려주고 재귀를 이용해 몫을 다시 계산하러 가줬다

#이렇게 되면 10으로 나눴을때 남는 나머지가 1의 자리부터 차곡차곡 더해져 나간다.

```