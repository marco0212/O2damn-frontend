# O2 Damn

[https://www.o2damn.club](https://www.o2damn.club)

## Introduction

`O2 Damn`은 캔버스와 리액트를 사용해 만든 웹 게임입니다. 노래의 리듬에 맞춰 키를 눌러 높은 점수를 획득하고 랭킹에 이름을 올려 유저들과 경쟁할 수 있습니다.

## Requirements

- 최신 버전의 크롬 브라우저 사용을 권장합니다. 
- 해당 웹 어플리케이션은 모바일을 위한 UI는 지원하지 않습니다.

## Installation

```
git clone https://github.com/marco0212/O2damn-frontend.git
cd O2damn
npm install (or yarn)
npm start (or yarn)
```

## Usage

- 해당 웹 어플리케이션은 키보드 위주의 인터페이스로 구현되어 있습니다. 자세한 키 설명은 아래를 참고해주세요. 

```
Select / Enter : Space bar
Change Music / Confirm Leave : Up, Down key
Game key : S, D, F, J, K, L
```

## Features

- 키보드 조작 인터페이스
- 플레이 할 음악 미리 듣기 및 선택
- 캔버스 활용한 게임 화면 구현
- 음원 파동 시각화
- 사용자 플레이 점수 기록

## Skills

### Client Side

- ES2015+
- React
- Redux
- Canvas
- Wavejs
- StyledComponents

### Server Side

- Express
- MongoDB
- Mongoose
- Atlas
- AWSSimpleStorageService
- AWSElasticBeanstalk
- AWSCertificateManager

## Challenge

- 프로젝트를 진행하며 당면한 가장 원초적인 도전은 캔버스에 그림을 그리는 일이었습니다. 캔버스 사용 경험이 전무했기 때문에 애니메이션은 둘째치고 직선이나 직사각형을 그리는 일도 쉽지 않았습니다. 그래서 프로젝트 사전 기간에 캔버스 튜토리얼 시청과 MDN 문서 읽기를 반복하며 인터페이스를 익히기 익혔습니다.

- 캔버스로 애니메이션을 구현하는 것은 생각보다 원시적이었습니다. css의 Transition 속성이나 Keyframe처럼 수치를 입력하면 자연스러운 모션 효과를 줄 수 있을거라고 기대했던 것과는 다르게 캔버스는 각 장면을 모두 그려주고 지우기를 반복하는 작업으로 모션 효과를 구현해야 했습니다. 각 객체는 이전 상태값을 보유해야만 했기 때문에 키노트와 패드 등 캔버스에 그려지는 것들은 모두 클래스(ES2015+ Class) 형태로 구현해야 했습니다. 객체 위주의 프로그래밍을 하며 가장 어려웠던 것은 유연한 객체를 만드는 일이었습니다. 유연한 객체를 만들기 위한 다양한 규칙이 있지만 이번 프로젝트에서는 객체가 서로의 기능에 침범하지 않도록 최대한 노력했습니다. 

- 프로젝트의 핵심은 시간 기반의 애니메이션을 구현하는 것이었습니다. 노래의 시간에 맞게 미리 제작된 키노트가 정확한 위치에 떨어지도록 구현해야 했는데 제가 애니메이션을 구현한 방식인 RequestAnimationFrame 함수는 모니터의 성능에 따라 실행 주기가 결정되었습니다. 예를 들어 60FPS의 모니터에서 게임의 싱크가 일치한다면 60FPS 이하의 모니터에서는 노트의 싱크가 점점 뒤로 밀릴 것이고 반대의 경우 노트가 더 빨리 내려오게 될 것이었습니다. 저는 노트의 y값을 함수에 의존하지 않고 시간에 따라 거리를 연산하는 방법이 필요했습니다. 거리 = 속도 * 시간 이라는 공식을 활용하기 위해서 기존 구조를 수정해 시간을 세는 역할을 하는 엔진 객체를 만들어 최상위 컨테이너로 만들었습니다. 노트는 더이상 함수 실행 주기에 의존하지 않고 엔진의 시간에 따라 y값을 정할 수 있었고 어떤 환경에서도 동일한 싱크로 떨어지도록 구현할 수 있었습니다.

***참고 자료***
- [https://www.viget.com/articles/time-based-animation](https://www.viget.com/articles/time-based-animation)
- [https://en.wikipedia.org/wiki/Object-oriented_programming](https://en.wikipedia.org/wiki/Object-oriented_programming)
