# Design Document

**Atomic Design Pattern + Sass(Scss)** 을 메인 컨셉으로 진행했습니다.

이 패턴은 개발자와 디자이너의 협업에 가장 특화되어 있다고 생각하며, 추후 프로젝트 진행과정에서 생성된 변경 사항에도 가장 유동적으로 대처가 가능합니다.  
마지막으로, 웹 개발자들간의 협업에 있어서도 용이합니다. 로직과 컴포넌트가 분리되어있기에 서로 역할을 나누어 속도감있게 프로젝트를 진행할 수 있습니다.

## Atomic Design

**Atomic Design Pattern** 은 크게 Atom, MoleCule, Organism, Template, Page 까지의 5단계로 분류된 디자인 시스템 방법론입니다.

1. **Atoms**  
   Atom에 대한 가장 쉬운 설명은 Html Tag입니다.  
   버튼, 라벨, 텍스트 인풋과 같은 최소 단위로서 최소한의 로직을 담고 있고, 프로젝트 디자인 시스템의 기초가 되는 단위들이 컨셉에 맞는 스타일 코드가 적용되어있는 상태입니다. 하단의 예시처럼 `styles/global.scss` 에서 프로젝트 전체의 _button_ 의 대략적인 스타일을 적용한 후, `components/atoms/button.tsx` 에서 필요에 맞게 attribute나 상세 스타일을 수정하면 됩니다.

   ```scss
   button {
   	outline: none;
   	border: 1px solid #ff6d6d;
   	background-color: #6d9f9f;
   }
   ```

2. **Molecules**  
   Molecule은 특정 기능을 수행할 수 있는 최소 단위의 컴포넌트입니다.  
   `Label` 과 `Input` Atom을 합쳐 하나의 Form을 구성했다면, 이 정도의 단위를 Molecule로 규정할 수 있습니다. Form Molecule은 상위 개념인 Organism이나 Template으로부터 _submit_ 함수를 전달받아 제출의 기능을 수행할 수 있습니다.

3. **Organisms**  
   Organisms은 Molecule들의 조합으로 유기적인 기능을 구현하거나, UI(인터페이스) 상에서 구분된 영역을 형성할 수 있는 Component들입니다. 이 코드 내에서는 Layout의 Header와 Footer 등을 Organism으로 구분했습니다. 상황에 맞게는 Template 폴더 안으로 이동해도 무방할 것이라 생각합니다. Component의 독립성(Standalone), 재사용성(Reusable)을 충족해야합니다.

4. **Templates**  
   직접적으로 페이지를 구성하는 최종 단계의 Component입니다.  
   Organism들의 조합으로 이루어져 있고, 페이지를 구성하는 layout으로 이해해도 좋습니다. 작업을 하면서 organism과의 구분이 모호한 점도 있다고 생각했지만, 개인적으로 기준점을 페이지의 직접적인 조작 요소(state 관리, business logic)를 포함하는지의 여부로 나누었습니다.

5. **Pages**  
   말 그대로 페이지입니다. Next.js 기준으로, routing의 단위가 pages 폴더 내의 파일로 이루어지기 때문에 파일의 이름이 하위 url과 동일합니다. Template들의 조합으로 구성되며, 상황에 맞게는 단일 template 파일로 구성될 수도 있고 복수의 파일로도 구성될 수 있습니다.

## About Style Codes

Styling과 관련된 키워드는 크게 3가지입니다.  
SASS(SCSS), classnames 모듈, 마지막으로 global styling 입니다.

**SCSS**(Post CSS)는 기존의 css를 보다 구조화해주고, 함수화할 수 있는 이점이 있습니다.  
_styles_ 폴더에 포함된 `_theme.scss`, `_mixins.scss`, `_variables.scss` 파일이 활용 예시인데, 프로젝트 전반적으로 활용되는 component의 style이나, 색상, 크기와 관련된 변수를 지정할 수 있고 손쉽게 재활용할 수 있습니다. 변경 사항이 발생해도 이 파일들을 이용해 수정한다면 개발의 효율성이 훨씬 좋아질 것이라 확신합니다.

**classnames** 모듈은 html tag의 class를 지정하는 것에 있어서 logic을 쉽게 반영할 수 있다는 이점이 있습니다. component에 전달되는 props를 기반으로 다른 class를 지정할 수도 있고, 이 logic이 복잡하다면 별도로 js(ts)를 통해 함수화해서 사용할 수도 있습니다.

**Global Styling** 은 기존에도 많이 활용되는 방식이지만, 상당히 중요한 부분이라 생각합니다. 디자인 프로세스에서도 반드시 고려해야하는 부분이고 전체적인 디자인 시스템을 구성할 때 함께 수정되어야할 부분입니다. `styles/_normalize.scss` 을 참고해 큰 기반이 되는 스타일들과 사용될 예정인 html tag에 대해 기본적인 수정을 하고 프로젝트를 진행할 것을 권장합니다.

## Reference

위 도큐먼트를 작성하면서 참고한 내용들입니다.

- [Atomic Design Methodology](https://atomicdesign.bradfrost.com/chapter-2/)
