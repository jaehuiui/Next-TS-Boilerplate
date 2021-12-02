## Design Document

**Atomic Design Pattern + Sass(Scss)** 을 메인 컨셉으로 진행했습니다.

이 패턴은 개발자와 디자이너의 협업에 가장 특화되어 있다고 생각하며,  
추후 프로젝트 진행과정에서 생성된 변경 사항에도 가장 유동적으로 대처가 가능합니다.  
마지막으로, 웹 개발자들간의 협업에 있어서도 용이합니다.  
로직과 컴포넌트가 분리되어있기에 서로 역할을 나누어 속도감있게 프로젝트를 진행할 수 있습니다.

## Atomic Design

**Atomic Design Pattern** 은 크게 Atom, MoleCule, Organism, Template, Page 라는  
5단계로 분류된 디자인 시스템 방법론입니다.

1. **Atoms**  
   Atom에 대한 가장 쉬운 설명은 Html Tag입니다.  
   버튼, 라벨, 텍스트 인풋과 같은 최소 단위로서 최소한의 로직을 담고 있고,  
   프로젝트 디자인 시스템의 기초가 되는 단위들이 컨셉에 맞는 스타일 코드가 적용되어있는 상태입니다.  
   하단의 예시처럼 _global.scss_ 에서 프로젝트 전체의 _button_ 의 스타일을 적용한 후,  
   _components/atoms/button.tsx_ 에서 필요에 맞게 attribute나 상세 스타일을 수정하면 됩니다.

   ```scss
   button {
     outline: none;
     border: 1px solid #ff6d6d;
     background-color: #6d9f9f;
   }
   ```

2. **Molecules**  
   제 기준에 있어 Molecule은 특정 기능을 수행할 수 있는 최소 단위의 컴포넌트입니다.  
   _Label_ 과 _Input_ Atom을 합쳐 하나의 Form을 구성했다면, 이 정도의 단위를 Molecule로  
   규정할 수 있습니다. Form Molecule은 상위 개념인 Organism이나 Template으로부터 _submit_ 함수를 전달받아 제출의 기능을 수행할 수 있습니다.

3. **Organisms**

4. **Templates**

5. **Pages**
