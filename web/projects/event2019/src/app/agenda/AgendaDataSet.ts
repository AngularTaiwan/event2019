// tslint:disable: max-line-length
export const AgendaDataSet = {
  day1: [
    {
      isSession: false,
      startTime: '12:00',
      endTime: '13:00',
      title: '報到'
    },
    {
      isSession: true,
      startTime: '13:00',
      endTime: '14:45',
      title: 'Angular Testing',
      description:
        '測試與開發，這兩者的關係對於開發者來說，可以說是又愛又恨，喜歡測試的好但不喜歡他的麻煩。幸運的是我們在開發 Angular 時，Angular 團隊已經為我們設想了撰寫測試時要有的基本要素，畢竟 Google 是間很注重測試的公司，就讓我們來了解在 Angular 內寫測試是多麼幸福的一件事',
      speaker: 'Kevin Yang'
    },
    {
      isSession: false,
      startTime: '14:45',
      endTime: '15:15',
      title: 'Tea Break 下午茶時間'
    },
    {
      isSession: true,
      startTime: '15:15',
      endTime: '17:00',
      title: 'Angular Schematics 程式碼產生器實戰',
      description:
        'Angular 寫到頭來，有很多重複的 Pattern 會不斷出現，除了你可以進一步元件化之外，有些重複的代碼就是要手動敲一遍才行。本工作坊將帶你從頭認識 Schematics 的架構，不但帶你上手基本開發，還會教你怎樣修改 Angular CLI 內建的 Schematics 工具，讓你在 ng generate component 之後，直接就是你要的元件範本！',
      speaker: 'Will 保哥'
    },
    {
      isSession: false,
      startTime: '17:30',
      endTime: '22:00',
      title: 'Dinner & Networking'
    }
  ],
  day2: [
    {
      isSession: false,
      startTime: '07:50',
      endTime: '08:20',
      title: '報到'
    },
    {
      isSession: false,
      startTime: '08:20',
      endTime: '08:30',
      title: 'Opening Welcome'
    },
    {
      isSession: true,
      startTime: '08:30',
      endTime: '09:30',
      title: 'Create Your Own RxJS Operators: How and Why',
      description: `Here we'll explore what an RxJS operator is, why they are powerful, and how we can create one, from scratch. We'll talk about the reasons why creating operators from scratch can improve your code base. We'll also cover how to test your custom operators.`,
      speaker: 'Ben Lesh'
    },
    {
      isSession: false,
      startTime: '09:30',
      endTime: '10:00',
      title: 'Tea Break 上午茶時間'
    },
    {
      isSession: true,
      startTime: '10:00',
      endTime: '11:00',
      title: 'Missing Tutorial: Dive into Architecture for Angular ',
      description: `
          Even if you learn the basic usage of Angular, developing applications by yourself will be a lot of anxiety. The reason may be that there is not enough learning about the architecture of how to design an entire application.

          Angular application is also a GUI application. Throughout the history of software development, many developers have devised best practices for the architecture of GUI applications. In other words, when thinking about the architecture of Angular applications, it is important to first learn from their history.

          This presentation looks back on the common key principles underlying many architectural patterns, such as MVC, MVP, MVVM, or Clean Architecture. For example, the Single Responsibility Principle or Presentation Domain Separation. Then I'll introduce design patterns that will be a hint for applying those principles to Angular applications and considering an architecture that is highly compatible with the framework.`,
      speaker: 'Suguru Inatomi '
    },
    {
      isSession: true,
      startTime: '11:00',
      endTime: '12:00',
      title: 'Bazel',
      description:
        'Use Bazel to build your Angular Application - Bazel is an amazing build tool used in all products inside Google, and in the future version of Angular, bazel will also become the default build tool. Bazel is a fast/reliable/extensible build system with a lot of amazing features. In this talk we will introduce the basic concepts of bazel and also provide a demo to talk about how to build/test/bundle Angular application with bazel.',
      speaker: '李嘉'
    },
    {
      isSession: false,
      startTime: '12:00',
      endTime: '13:00',
      title: 'Lunch Break 午餐時光'
    },
    {
      isSession: true,
      startTime: '13:00',
      endTime: '14:00',
      title: 'Lighthouse - Performance Tuning',
      description:
        '根據調查當人開一個網站等待時間超過 3 秒鐘時，會有很大的機率會直接離開，要怎麼知道自己的網站效能不錯，當然需要用工具來作評量，Google 的 Lighthouse 就是一個不錯的工具，除了提供檢測外，我們也可以透過檢測項目學習到開發網站的技巧，至於有什麼事情是我們一開始就可以留意的，就讓這議程告訴你',
      speaker: 'Paul Li'
    },
    {
      isSession: true,
      startTime: '14:00',
      endTime: '15:00',
      title: 'The hidden docs of Angular',
      description:
        '介紹一些有用但是 Angular 文檔上幾乎沒有涉及的 Angular 開發技巧，例如自定義 Angular Input 的 Typescript decorators、增強 ngTemplateOutlet 為 ngStringTemplateOutlet，Directive與Component的特別用法等等',
      speaker: '謝亞東'
    },
    {
      isSession: false,
      startTime: '15:00',
      endTime: '16:00',
      title: 'Tea Break 下午茶時間 & Lighting Talk'
    },
    {
      isSession: true,
      startTime: '16:00',
      endTime: '17:00',
      title: 'NX',
      description: `
      Angular 本身已是非常適合企業使用的架構，但面臨到超大型，數千個頁面的專案，若沒有更進一步的規劃開發流程、架構等細節，一樣會面臨到難以維護擴充等問題。而 Nx 的出現就是希望能更進一步將 Angular 架構得更加有條理，本次分享將分享講者在面臨到數千個頁面的專案時導入 Nx 架構的心得與成效！`,
      speaker: 'Mike '
    },
    {
      isSession: false,
      startTime: '17:00',
      endTime: '17:00',
      title: '再會'
    }
  ]
};
