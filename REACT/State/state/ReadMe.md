# 상태관리가 뭐길래❓

### 학습 의도

블로그에 정리한 내용을 토대로 실제로 여러가지 상태관리를 통해 상태관리에 대한
이론적인 부분을 실습으로 체득하고자 함.

---

프론트엔드하면 상태관리라는 단어를 빼놓을 수 없을 것이다.
상태를 효율적으로 관리하고 보여주는 것이 프론트엔드 역량의 핵심이라 해도 과언이 아닐 것이다.

그렇다면 도대체 상태란 무엇이고, 상태가 왜 프론트엔드에서 중요할까?
이러한 필요성들이 어떻게 어떤 목표를 가지고 발전해왔을지 살펴보자.

### 상태❓

사실 상태는 갑자기 등장하여 프론트엔드 진영에서만 쓰이고 있는 개념이 아닙니다. 객체지향 프로그래밍(OOP, Object Oriented Programming)에선 객체가 변수로 자신의 상태를, 메소드로는 자신이 할 수 있는 행위를 갖습니다.

```js
class Student {
    name;
    grade;
    major;

    constructor(name, grade, major) {
        this.name = name;
        this.grade = grade;
        this.major = major;
        // ... 다양한 상태들
    }

    speak() {
        console.log(
            `저는 ${this.major}를 전공하고 있는 ${this.grade}학년 ${this.name}이라고 합니다.`,
        );
    }

    setName(newName) {
        this.name = newName;
    }

    setGrade(newAge) {
        this.age = newAge;
    }

    setMajor(newMajor) {
        this.major = newMajor;
    }
    // ... 다양한 행위들
}
```

OOP에서의 상태는 객체를 설명하며 가변적인 데이터다.
상태(데이터)없이 행위(메소드)로만 객체를 정의하려고 한다면 불충분할뿐더러
행위(메서도)도 제약적으로 정의될 수밖에 없기 때문이다.

### 프론트엔드에서 상태는 ❓

프론트엔드에서 상태란 주로 유저 정보나 UI에 영향을 미치는 동적 데이터다.

특정 컴포넌트 안에서 관리되는 로컬 상태와 여러 컴포넌트에서 관리되는 전역 상태로 구분지을 수 있다. 좀 더 깊은 이해를 위해 아래의 예시를 보자.
<img src='/state/Untitled (1).png'>

전체 업무 탭을 보면 개인 업무와 팀 업무에서 해야할 일을 한 꺼번에 관리하고 있다. 이 때, 위의 할 일들이 바로 상태이다.

프론트엔드는 상태를 갖고 있으므로 사용자와 상호작용을 할 수 있다.

**[예시]**

위에서 개인 업무만 따로 보고 싶다고 가정한다면, 개인 업무 탭을 누를 시PERSONAL 형태로 이뤄진 할일 들만 보이게 될 것이다.

즉, 상태는 동적 데이터라고 생각하면 이해가 쉽게 와닿을 수 있다.

정리하자면 프론트엔드에서의 상태는 사용자에게 노출시키고 상호작용하기 위핸 데이터다.

### 프론트엔드에서 상태관리는 ❓

프론트엔드의 상태관리를 목표한 UI를 - 좀 더 확장하면 UX(User Experience)까지 - 구현하기 위해 적절히 상태(데이터)와 그 구조를 정의, 설계하고 상태가 언제, 어떻게, 왜 변화했는지 잘 추적하는 일이라고 이해할 수 있겠습니다. 상태를 UI라는 함수에 적용했을 때, 문제를 일으키지 않도록 말이죠.

이 UI, UX를 상태에 대한 함수로 여기는 개념은 모던 프론트엔드 프레임워크들이 차용하고 있습니다.

### 블로그

https://kook-lee.notion.site/c9941c4757c14bb5943ae81f27e146f4
