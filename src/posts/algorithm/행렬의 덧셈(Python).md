---
title: "#16 알고리즘 연습 - 행렬의 덧셈(Python)"
date: "2019-03-25"
category: ['algorithm']
draft : False
---



행렬의 덧셈은 행과 열의 크기가 같은 두 행렬의 같은 행, 같은 열의 값을 서로 더한 결과가 됩니다. 2개의 행렬 arr1과 arr2를 입력받아, 행렬 덧셈의 결과를 반환하는 함수, solution을 완성해주세요.


제한 조건

행렬 arr1, arr2의 행과 열의 길이는 500을 넘지 않습니다.


입출력 예

|arr1	|arr2	|return|
|-|-|-|
|[[1,2],[2,3]]|	[[3,4],[5,6]]|	[[4,6],[7,9]]|
|[[1],[2]]|	[[3],[4]]	|[[4],[6]]|




>__*문제풀이*__    
행렬문제를 풀때는 중첩 for문을 자주 사용해서 중첩 for을 이용한 list append를 이용해
각 row별로 연산을 수행해줬다.

#### 내 풀이 🏆

```python

def solution(arr1, arr2):
    answer = []
    for i in range(0,len(arr1)):         #range(len(arr1))으로 바꿔줘도 된다
        row_list = []                     #answer에 append해줄 row를 보관하는 임시 row_list
        for j in range(0,len(arr1[0])):   #row안에 있는 col을 하나하나 지칭하기위해
            row_list.append(arr1[i][j] + arr2[i][j])    
                                            #row별로 차곡차곡 col의 합을 append해준다
        answer.append(row_list)           #row_list의 작성이 완료됭ㅆ으면 asnwer에 추가 해준다
    return answer

```

#### 다른 풀이🏆
```python

def sumMatrix(A,B):
    answer = [[A[i][j] + B[i][j] for j in range(len(A[0]))] for i in range(len(A))]

    return answer

# 위의 코드에서 list comprehension을 사용하여 문제를 풀었는데 중첩 for문을 list comprehension에 넣는다는 생각이 참신했다. 

# 그리고 나는 더한 원소들을 list에 담아야 list안에 추가해줄수 있다 생각했는데
# 아예 하나하나의 원소를 더해서 그 원소를 []로 묶어주고 그 list를 다시 for 문으로 list를 생성해 주는 아이디어를 배웠다

# 예를 들면 A[i][j] = A[i][j] + B[i][j] 이런 아이디어도 있는걸 생각할수 있어야 위와같은 아이디어도 나올 수 있을것 같다.
```