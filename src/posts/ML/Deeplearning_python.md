---
title: "Deeplearning 시작전 최소한의 numpy와 matplot"
date: "2020-06-10"
category: ['Deeplearing',"ML"]
draft : False
---

>물고기책을 보고 정리하는 글입니다.

## Numpy
딥러닝을 구성하다보면 행렬이나 array가 많이 등장하는데 numpy를 사용하면 편리한 메서드가 많이 구비되어있다.

numpy에서 배열끼리의 연산은 원소수가 같다면 각 원소별로 실행이 되고, 원소 수가 다르면 실행되지않는다. 
그런데 이때 배열과 스칼라 값으로도 연산을 수행할수 있는데 이때는 스칼라값이 배열만큼 확장이 되고 이를 브로드캐스트라고 한다.

```python
x = np.array([1.0, 2.0, 3.0])
print(x/2.0)
```

그리고 물론 N차원 배열도 만들수있다.
```python
A = np.array([[1, 2], [3, 4]])
print(A.shape)
A *10 
print(A)
```
위와같이 shape를 통해서 행렬의 모양을 알아볼 수 있다.
그리고 물론 행렬또한 브로드캐스트를 이용해서 스칼라값과의 연산이 가능하다.
일반적으로 벡터와 행렬을 텐서(tensor)라고 부르기도 한다.

* 브로드캐스트
```python
A = np.array([[1,2] , [3,4]])
B = np.array([10,20])
A * B
print(A*B)
```
이렇듯 1차원배열도 2차원 배열로 브로드캐스팅 되어서 연산된다.

* 배열 조작하기
```python
X = X.flatten()
print(X) 
X[np.array([0,2,4])]
print(X>15)
print(X[X>15])
```

위의 코드들을 보면 `flatten`이라는 `method`를 사용하면 [[1,2],[3,4]] 이렇게 되어있던 것이 [1,2,3,4]이런방식으로 해체되고 이를 이용해서 우리는 특정 원소를 얻는데 편리해진다.
`X >2`부분은 X배열중에서 2보다 큰 index를 true로 하여 반환하는데(`[false,false, true,true]`) 이를 다시금 X의 indexing으로 넣어주게 되면 X의 값중 true에 해당하는 애들만 반환해주어 우리가 원하는 특정 index만 가져올수 있다.

## matplotlib
딥러닝에서는 그래프와 데이터 시각화도 중요한데 matplotlib은 그래프를 그려주는 lib이다.  


### 👨‍💻 실습코드

```python
import matplotlib.pyplot as plt
import numpy as np
from matplotlib.image import imread
x = np.array([1.0, 2.0, 3.0])

print(type(x))

y = np.array([2.0, 4.0, 6.0])

print(x+y)
print(x-y)
print(x*y)
print(x/y)

print(x/2.0)

A = np.array([[1, 2], [3, 4]])
print(A)

print(A.shape, A.dtype)

B = np.array([10, 20])
A * B
print(A*B)

x = np.arange(0, 6, 0.1)
y = np.sin(x)
y2 = np.cos(x)
plt.plot(x, y, label="sin")
plt.plot(x, y2, linestyle="--", label="cos")  # plot이 그래프를 그리는 부분
plt.xlabel("x")
plt.ylabel("y")
plt.title("sin & cos")
plt.legend()  # 라벨을 입력한 표지판(?)을 보여주는 부분
plt.show()  # 그래프를 보여주는 부분

# 이미지파일 보여주기
# img = imread('img.png')
# plt.imshow(img)
# plt.show()

```