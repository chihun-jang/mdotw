---
title: "#9 알고리즘 연습 - 두 정수 사이의 합(Python)"
date: "2019-01-26"
category: ['algorithm']
draft : False
---


두 정수 a, b가 주어졌을 때 a와 b 사이에 속한 모든 정수의 합을 리턴하는 함수
solution을 완성하세요. 
예를 들어 a = 3, b = 5인 경우, 3 + 4 + 5 = 12이므로 12를 리턴합니다.


제한 조건
* a와 b가 같은 경우는 둘 중 아무 수나 리턴하세요.
* a와 b는 -10,000,000 이상 10,000,000 이하인 정수입니다.
* a와 b의 대소관계는 정해져있지 않습니다.

입출력 예

|a|	b	|return|
|-|-|-|
|3|	5	|12|
|3|	3	|3|
|5|	3	|12|


>__*문제풀이*__
파이썬에서는 sum함수도 있고 list를 만드는 것도 쉽기때문에 list comprehension을 이용해
코드를 간결하게 짤수 있을 것 같다.



#### 내 풀이 🏆

```python
def solution(a, b):
    if a<=b:
        temp = [i for i in range(a,b+1)]         #b가 a보다 크다면 a부터 b까지 
    else:                                         #반복문을 통해 list생성
        temp = [i for i in range(b,a+1) ]        #a가 b보다 크다면 range의 
                                                  #인자를 바꾸어 b부터 a까지 생성
    return sum(temp[:len(temp)])                 #sum함수에 temp함수의 시작부터
                                                  #끝까지 slice를 넣어준다

        #( 풀이를 적으면서 보니 그냥 temp만 넣어주는거랑 같은말)


```

#### 다른 풀이 🏆

```python
def adder(a, b):
    if a > b: a, b = b, a             #a가 만약 b보다 크다면 a와 b를 swap해서 값을 바꿔줌
                                       
    return sum(range(a,b+1))          #a부터 b까지의 값을 sum해줌

```

#### 다른 풀이2 🏆

```python
def adder(a, b):
    return (abs(a-b)+1)*(a+b)//2                 #abs라는 절댓값을 구하는 내장함수를 이용
                                                  a ~ b까지의 합을 구하는 덧셈 공식을 이용했다
```


#### 짚고 넘어갈만한 것

* *python에서의 swap*

```python
if a > b:

    a,b = b,a

# a,b = b,a를 이용해서 값 두개를 서로 바꿔줬다
# a,b = b,a 뿐만아니라
# a,b,c = b,c,a 이처럼 3개의 tuple에 대해서도 손쉽게 값을 swap해줄 수 있다.


```

*단 주의 할점은 a,b = b,a 가 적용되는 범위는 해당 식이 있는 블록이라고 생각해주자*

```python
        def swap(a,b)
             a,b = b,a

        #swap(a,b)를 해주면 a와 b의 값이 변경되지 않는다(함수 내에서만 변경된다)      

        #따라서 swap (a,b) 이렇게 해주지 말고 그냥 a,b = b,a 이런식으로 작성을 해서 사용
```


* 덧셈공식을 이용하면 쉽게 계산할수 있는데 농담으로 특정 case를 Print하는 가장 효율적인 방법은 `print('특정케이스')`라고 하는 만큼   수학공식은 특정 상황에서 가장 효율적으로 동작할 수 있는 방법인만큼 염두해두는 습관을 가지도록 하자.