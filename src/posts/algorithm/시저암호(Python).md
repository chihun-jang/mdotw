---
title: '#14 알고리즘 연습 - 시저암호(Python & JS)'
date: '2019-03-24'
category: ['algorithm']
draft: False
---

어떤 문장의 각 알파벳을 일정한 거리만큼 밀어서 다른 알파벳으로 바꾸는 암호화 방식을 시저 암호라고 합니다.
예를 들어 AB는 1만큼 밀면 BC가 되고, 3만큼 밀면 DE가 됩니다. z는 1만큼 밀면 a가 됩니다.
문자열 s와 거리 n을 입력받아 s를 n만큼 민 암호문을 만드는 함수, solution을 완성해 보세요.

제한 조건

-   공백은 아무리 밀어도 공백입니다.
-   s는 알파벳 소문자, 대문자, 공백으로만 이루어져 있습니다.
-   s의 길이는 8000이하입니다.
-   n은 1 이상, 25이하인 자연수입니다.

입출력 예

| s     | n   | result |
| ----- | --- | ------ |
| AB    | 1   | BC     |
| z     | 1   | a      |
| a B z | 4   | e F d  |

> 문제 풀이 IDEA  
> 어떻게 보면 하드코딩이라고도 볼수 있겠지만
> ord 와 chr를 이용해서 왔다갔다 하고 if문을 통해서 분기를 나눠 아스키 코드에 n을 더하는것 보다
> 규칙을 알고 있고 제약 조건에 n은 25이하의 자연수라고 해놨기 때문에
> 알파벳모음을 2번 반복해서 적어주고 공백을 피해서 index만 n만큼 더해주면 되겠다.

#### 내 풀이 🏆

```python

def solution(s, n):
    mydic="abcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZABCDEFGHIJKLMNOPQRSTUVWXYZ"
    answer =""
    for i in s:             #문자열내의 문자하나하나를 밀어쓰기 위해서 탐색
        if i == " ":        #만약 공백이면 공백은 따로 처리하지 않고 그냥 공백으로 answer에 더한다
            answer += i
        else:
            answer += mydic[mydic.find(i)+n]   #
            #공백이 아닌 문자라면 mydic에서 문자가 처음으로 나타나는 index를 찾아 n만큼 더해준다
    return answer
```

#### 다른 풀이🏆

```python

def caesar(s, n):
    s = list(s)          #문자열을 list로 형변환해서 다루기 쉽게 만들어 준다

    for i in range(len(s)):
        if s[i].isupper():
            s[i]=chr((ord(s[i])-ord('A')+ n)%26+ord('A'))

            #list의 원소 하나하나를 탐색하는데 대문자일때
            #ord(s[i])에서 ord(A)를 빼면 일단 대문자 ASCII중에 몇번째인지나오고

        elif s[i].islower():
        #n만큼 이동한 다음 26의 나머지를 구하는 이유는 Z에서 n만큼 더하면 A로 넘어가서

            s[i]=chr((ord(s[i])-ord('a')+ n)%26+ord('a'))
            #시작하므로 알파벳의 갯수인 26으로 나누어 그만큼을 다시 A의 ASCII에 더해서출력

    return "".join(s)      # list의 원소들을 다시 문자열로 변환하여 return

```

```javascript
function solution(s, n) {
    var mydict =
        'ABCDEFGHIJKLMNOPQRSTUVWXYZABCDEFGHIJKLMNOPQRSTUVWXYabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxy'
    var answer = ''

    for (var i = 0; i < s.length; i++) {
        if (s[i] === ' ') {
            answer += ' '
        } else {
            answer += mydict[mydict.indexOf(s[i]) + n]
        }
    }

    return answer
}
```
