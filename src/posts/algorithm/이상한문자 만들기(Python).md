---
title: "#30 알고리즘 연습 - 이상한문자 만들기(Python)"
date: "2019-05-07"
category: ['algorithm']
draft : False
---

##  이상한문자 만들기

문자열 s는 한 개 이상의 단어로 구성되어 있습니다. 
각 단어는 하나 이상의 공백문자로 구분되어 있습니다. 
각 단어의 짝수번째 알파벳은 대문자로, 홀수번째 알파벳은 소문자로 바꾼 문자열을 리턴하는 함수, solution을 완성하세요.


제한 사항

* 문자열 전체의 짝/홀수 인덱스가 아니라, 단어(공백을 기준)별로 짝/홀수  인덱스를 판단해야합니다.
* 첫 번째 글자는 0번째 인덱스로 보아 짝수번째 알파벳으로 처리해야 합니다.


입출력 예

|s	|return|
|-|-|
|try hello world|	TrY HeLlO WoRlD|


입출력 예 설명

try hello world는 세 단어 try, hello, world로 구성되어 있습니다. 
각 단어의 짝수번째 문자를 대문자로, 홀수번째 문자를 소문자로 바꾸면 TrY, HeLlO, WoRlD입니다. 따라서 TrY HeLlO WoRlD 를 리턴합니다.


> 문제풀이 IDEA   
처음에는 python에서 제공해주는 문자열을 split해서 list로 만든다음 각 단어들이 list의 원소로 들어가 있으니까 그 원소들의 index를 가져와서 하나하나 바꿔주는 생각을 했는데   
그렇게 되어버리면 list의 길이만큼 1차로 돌고 다시 각각의 원소에 대해서 for가 돌게되므로 이중 for문이 생성되게 된다.   
따라서 그냥 그 string을 탐색하면서 체킹해주는것이 필요한데
원래는 공백을 제외하고 각 index별로 number를 부여해서 number의 짝 홀수 여부에 따라서 다르게 처리해 주려했는데
그러다보니 규칙성 및 이야기가 복잡해지는 것 같아서 flag라는 표식을 만들어서 사용했다.   
flag를 가지고 공백을 기준으로 항상 새로 초기화 시켜주고 대문자 소문자로 변환시 flag의 상태를 변환 시켜서 for문 내에서도 두갈래의 길이 번갈아 실행되도록 했다.



#### 내 풀이 🏆
```python
def solution(s):
    flag = 0                  #표식을 0으로 초기화
    s = list(s)               
    #string은 assignment가 되지 않으므로 list로 변환
    for i,v in enumerate(s):  
    #enumerate를 이용해서 index와 value를 모두 이용할 수 있게
        if v == " ":          
    #value값이 공백이면 flag를 0으로 선언해준다

    #이때 공백인지 아닌지 판단해서 if를 처리해주는게 중요하므로

    #공백에서 분기되는 if가 제일 상단에 나와야 오류없이 동작한다.
            flag = 0
        elif flag == 0:      
        # flag 가 0이면 list의 i번째 data를 value를 upper로 만들어서 치환
            s[i] = v.upper()
            flag = 1          
            # 그리고는 다음 표식은 1로 바꾸어 lower로 처리되도록 한다
        else:                 
        # flag가 1이면 lower로 만들기 위해 이쪽으로 뺀다
            s[i] = v.lower()
            flag = 0
    return ''.join(s)         
    #그럼 list의 원소 값들이 모두 원하는 대로 치환되었는데 return값은 다시 string으로 바꾸어 처리

```


#### 다른 풀이 🏆
```python
def toWeirdCase(s):
    # 함수를 완성하세요
    return ' '.join([''.join([c.upper() if i % 2 == 0 else c.lower() for i, c in enumerate(w)]) for w in s.split(" ")])
```

### 느낀점
위의 코드가 입력받은 문자열을 공백을 기준으로 list로 바꾼다음
for문으로 list의 원소들을 탐색하며   
다시 for문으로 원소들의 index를 하나하나 체크해서 index의 홀수 짝수여부에따라서 upper, lower로 처리를 해주고,   
이 모든것들을 list comprehension과 조합해서 string의 assignment가 가능하게 해주고   
최종적으로 list를 join으로 string으로 바꿔준건데
위의 코드는 특히나 1줄에 너무 많은 내용을 넣으려고 해서
가독성도 떨어지고 한눈에 잘 안들어 오는것 같다(개인적으로)   
그래서.. 나는 내 코드가 더 효율적이고 좋은 것 같다.
