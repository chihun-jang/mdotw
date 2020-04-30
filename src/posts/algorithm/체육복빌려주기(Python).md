---
title: "#21 알고리즘 연습 - 체육복 빌려주기(Python)"
date: "2019-04-14"
category: ['algorithm']
draft : False
---


점심시간에 도둑이 들어, 일부 학생이 체육복을 도난당했습니다. 
다행히 여벌 체육복이 있는 학생이 이들에게 체육복을 빌려주려 합니다. 
학생들의 번호는 체격 순으로 매겨져 있어, 바로 앞번호의 학생이나 바로 뒷번호의 학생에게만 체육복을 빌려줄 수 있습니다.
예를 들어, 4번 학생은 3번 학생이나 5번 학생에게만 체육복을 빌려줄 수 있습니다. 
체육복이 없으면 수업을 들을 수 없기 때문에 체육복을 적절히 빌려 최대한 많은 학생이 체육수업을 들어야 합니다.
전체 학생의 수 n, 체육복을 도난당한 학생들의 번호가 담긴 배열 lost, 
여벌의 체육복을 가져온 학생들의 번호가 담긴 배열 reserve가 매개변수로 주어질 때, 
체육수업을 들을 수 있는 학생의 최댓값을 return 하도록 solution 함수를 작성해주세요.


제한사항

* 전체 학생의 수는 2명 이상 30명 이하입니다.
* 체육복을 도난당한 학생의 수는 1명 이상 n명 이하이고 중복되는 번호는 없습니다.
* 여벌의 체육복을 가져온 학생의 수는 1명 이상 n명 이하이고 중복되는 번호는 없습니다.
* 여벌 체육복이 있는 학생만 다른 학생에게 체육복을 빌려줄 수 있습니다.
* 여벌 체육복을 가져온 학생이 체육복을 도난당했을 수 있습니다. 이때 이 학생은 체육복을 하나만 도난당했다고 가정하며, 남은 체육복이 하나이기에 다른 학생에게는 체육복을 빌려줄 수 없습니다.


입출력 예

| n	|lost|	reserve	|return|
|-|-|-|-|
| 5|	[2, 4]|	[1, 3, 5]|	5|
| 5|	[2, 4]|	[3]|	4|
| 3	|[3]|	[1]	|2|


입출력 예 설명

예제 #1
1번 학생이 2번 학생에게 체육복을 빌려주고, 3번 학생이나 5번 학생이 4번 학생에게 체육복을 빌려주면 학생 5명이 체육수업을 들을 수 있습니다.

예제 #2
3번 학생이 2번 학생이나 4번 학생에게 체육복을 빌려주면 학생 4명이 체육수업을 들을 수 있습니다.



>__*문제풀이*__   
이전의 알고리즘 문제에서 n의 갯수가 어느정도 있을때 list를 만들어 준후
해당 list의 index값을 변경시켜 가면서 원하는 값을 얻었던 때가 있었는데
이를 이용해서 학생들을 index에 대응 시켜보았다   
학생들의 수만큼 1개의 체육복을 들고오고 여분의 체육복을 들고온 학생,
잃어버린 학생을 반영해주었다.   
그리고 enumerate함수를 이용해 index와 value값을 동시에 이용해 0개의 체육복인 학생이 있을때
앞뒤로 2개이상을 가진 학생이 있는지 비교하여 빌려오는 형식의 조건문을 작성해주었다.   
즉. 준비물을 안 들고 왔을때 여분의 준비물이 있는 친구들에게 빌리는 과정을 작성했다.


#### 내 풀이 🏆
```python
def solution(n, lost, reserve):
    clothes_list = [1]*n          #학생들 모두 체육복을 가지고 있다

    for i in reserve:             #여분의 옷을 챙긴 학생들의index에 표시
        clothes_list[i-1] = 2

    for i in lost:                #도난 당한 학생들의 체육복을 1개씩 줄임
        clothes_list[i-1] = clothes_list[i-1]-1

    for index,value in enumerate(clothes_list):     #index와 value값 둘다 사용하려고 enumerate를 가져와 사용
        if index > 0 and value == 0 and clothes_list[index-1]==2:  #0이면 이전친구에게 체육복 남는거 있냐고 물어봄
            clothes_list[index] = 1                                 이때 boundary를 벗어나는 것을 방지하기 위해 1부터로 처리
            clothes_list[index-1] =1                                #빌렸으니 0이던 학생은 1로 빌려준 학생은 2->1이 된다
        elif index < n-1 and value == 0 and clothes_list[index+1]==2:
            clothes_list[index] = 1
            clothes_list[index+1] =1

    return n-clothes_list.count(0)                                  #옷을 못빌려서 0인 학생들을 제외하고는 모두 체육복이있다.

```


#### 다른 풀이🏆
```python
def solution(n, lost, reserve):
    _reserve = [r for r in reserve if r not in lost]      #도난후에 진짜로 여분이 있는 학생들 list
    _lost = [l for l in lost if l not in reserve]         #여분이 있어 도난후에 1이 되는 애들말고 진짜 0인 애들

    for r in _reserve:                                    #여분이 있는 학생들의 번호 -1과 +1을 해서 잃어버린 애들이 있으면 빌려줌
        f = r - 1                                         
        b = r + 1
        if f in _lost:                                    # 빌려줬기때문에 lost list에서 삭제
            _lost.remove(f)
        elif b in _lost:
            _lost.remove(b)
    return n - len(_lost)

```

### 소감
위의 코드가 프로그래머스에서 좋아요를 많이 받은 코드인데
짧아보이고 간결해 보이지만

나의 코드가 variable naming을 길게 해서 그런것도 있고 위의 코드는 2개의 list를 생성함에도 
list comp를 이용해서 생성했기때문에 짧아보인다.
특히나 remove라는 메서드를 사용할때 시간 복잡도가 n만큼인데
for문안에서 돌고 있으므로 len(reserve)*len(lost)만큼의 시간복잡도가 생기게 된다

따라서 좀더 직관적으로 이해가 쉬운 나의 코드가 더 좋지 않을까 한다.

