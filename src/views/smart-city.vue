<template>
  <div class="py-12">
    <v-row>
      <v-col class="d-flex justify-end align-end">
        <v-btn color="#98231a" @click="$router.push({ path: '/' })">
          <v-icon density="compact" icon="mdi-home"> </v-icon>
          الصفحة الرئيسية
        </v-btn>
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <v-card class="red-gradient text-white pa-6" v-ripple>
          <v-card-title class="text-h4"> نبذة عن هاتف ليبيا </v-card-title>
          <v-card-text class="mt-4 text-h6">
            <p>
              تميزت شركة هاتف ليبيا بانتشارها على كافة التراب الليبـــــــــي مما جعلها تكتسب خبرة
              ذهبية من خلال التحديات التـــي خاضتها في جميع البيئات والجغرافيا المتنوعة من الساحل
              الى الجبال الى الصحاري ومن خلال تقديم الخدمات التي كان جزءاً كبيراً منها اخلاقياً تجاه
              المواطن واحترافياً تجاه الزبون وبهذا تمرس المهندسين والفنيين بالعمل الميداني واحتراف
              اعمال البنية التحتية، ومعدات التراسل.
            </p>
            <p class="mt-4">
              ولذا استحقت شركة هاتف ليبيا ملكية البنية التحتية لشبكات الألياف البصرية ومعدات نقل
              البيانات. وقد برعت في ذلك من خلال تنفيذها لمشاريع استراتيجية كبرى التي مكنتها من
              امتلاك البنية التحتية من خلال مشروعي شبكة الجيل القادم NGBN ومشروع تطوير شبكة التراسل
              الوطنية. وهذا مهد الطريق للاستمرار بالتطوير والاستثمار في أنظمة نقل البيانات مثل شبكة
              الميترو Metro وشبكة الربط الشبكي IP-MPLS. حيث استحقت شركة هاتف ما اسند اليها من تخصصات
              عن طريق قرار الشركة الليبية القابضة.
            </p>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="6">
        <v-card class="pa-6" v-ripple>
          <v-card-title class="text-h4"> المشاريع</v-card-title>
          <v-card-text class="mt-4 text-h6">
            <p>
              في الوقت الذي تعاني فيه كل المدن الليبية من سوء الاتصالات وتقادم الشبكة النحاسية وفي
              ظل مواكبة التطور وطلب الزبائن لسرعات أعلى وخصوصاً كبار الزبائن، مما فرض علينا وبشكل
              عاجل التحول الى الالياف البصرية والتي ستتيح سعات ضخمة تمكن الزبون من توصيل أكثر من
              خدمة (Triply Play Services) .
            </p>
            <p class="mt-4">
              حيث أوضحت تقارير الإتحاد الأوروبي مع شركاته التي تحولت من الشبكة النحاسية الى شبكة
              الألياف البصرية (FTTh) الى خفض تكاليف صيانة شبكاتها الى الربع بالإضافة الى توفير سعات
              خيالية وارتفاع رضى الزبائن عن الخدمة مقارنة بالشبكة النحاسية .
            </p>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <v-card class="red-gradient text-white pa-6" v-ripple>
          <v-card-title class="text-h4"> مشروع منطقة زاوية الدهماني – طرابلس</v-card-title>
          <v-card-text class="mt-4 text-h6">
            <p>
              تم اختيار عمارات 7000 وذلك لما تعانيه المنطقة من تردي أو بالأحرى انعدام خدمات
              الاتصالات وكثرة مشاكل البنية التحتية للشبكة النحاسية الحالية في منطقة قاريونس حيث ان
              المرافق العامة من مدارس ومستشفيات ومؤسسات أمنية وتجارية وخدمية تعاني من غياب خدمات
              الاتصالات والتي بدورها تؤثر سلباً على سرعة الأداء وإنقاذ بعض المواقف الطارئة وغيرها من
              التطبيقات التي لا تخفى على أحد.حيث الى الان
            </p>
            <p class="mt-4">
              تمت الاختبارات اللازمة وتشغيل المعدات وقدمت الخدمة بنجاح وتم الحصول على النتائج:
            </p>
            <v-list class="bg-transparent">
              <v-list-item>
                <template v-slot:prepend>
                  <v-icon icon="mdi-numeric-1" size="small" />
                </template>
                <v-list-item-title style="text-wrap: pretty">
                  سرعات عالية (تبدأ من 40-100 ميجا للمواطنين) /(أعلى من 200 ميجا لكبار الزبائن
                  والمؤسسات).
                </v-list-item-title>
              </v-list-item>
              <v-list-item>
                <template v-slot:prepend> <v-icon icon="mdi-numeric-2" size="small" /> </template>
                <v-list-item-title style="text-wrap: pretty">
                  استقرارية وحماية عالية على مستوى الشبكة.
                </v-list-item-title>
              </v-list-item>
              <v-list-item>
                <template v-slot:prepend>
                  <v-icon icon="mdi-numeric-3" size="small" />
                </template>
                <v-list-item-title style="text-wrap: pretty">
                  تركيب فوري للمعدات عند طلب الزبائن وتفعيل الخدمة في وقت قياسي.
                </v-list-item-title>
              </v-list-item>
              <v-list-item>
                <template v-slot:prepend>
                  <v-icon icon="mdi-numeric-4" size="small" />
                </template>
                <v-list-item-title style="text-wrap: pretty">
                  إمكانية تقديم الخدمة لشركات القطاع مثل شركتي المدار ولبيانا عن طريق ربط المعدات
                  بالأبراج.
                </v-list-item-title>
              </v-list-item>
              <v-list-item>
                <template v-slot:prepend>
                  <v-icon icon="mdi-numeric-4" size="small" />
                </template>
                <v-list-item-title style="text-wrap: pretty">
                  الاستغناء عن الشبكة الهوائية وعدم تشويه المنظر العام واستغلال المسارات بالبنية
                  التحتية لشركة هاتف ليبيا والاستفادة من شبكة المباني.
                </v-list-item-title>
              </v-list-item>
            </v-list>
          </v-card-text>
        </v-card>
      </v-col>
      <v-col>
        <v-card class="pa-6" v-ripple>
          <v-card-title class="text-h4"> مشروع منطقة قاريونس - بنغازي</v-card-title>
          <v-card-text class="mt-4 text-h6">
            <p>
              تم اختيار عمارات 7000 وذلك لما تعانيه المنطقة من تردي أو بالأحرى انعدام خدمات
              الاتصالات وكثرة مشاكل البنية التحتية للشبكة النحاسية الحالية في منطقة قاريونس حيث ان
              المرافق العامة من مدارس ومستشفيات ومؤسسات أمنية وتجارية وخدمية تعاني من غياب خدمات
              الاتصالات والتي بدورها تؤثر سلباً على سرعة الأداء وإنقاذ بعض المواقف الطارئة وغيرها من
              التطبيقات التي لا تخفى على أحد.حيث الى الان
            </p>
            <p class="mt-4">
              تمت الاختبارات اللازمة وتشغيل المعدات وقدمت الخدمة بنجاح وتم الحصول على النتائج:
            </p>
            <v-list>
              <v-list-item>
                <template v-slot:prepend>
                  <v-icon icon="mdi-numeric-1" size="small" />
                </template>
                <v-list-item-title style="text-wrap: pretty">
                  سرعات عالية (تبدأ من 40-100 ميجا للمواطنين) /(أعلى من 200 ميجا لكبار الزبائن
                  والمؤسسات).
                </v-list-item-title>
              </v-list-item>
              <v-list-item>
                <template v-slot:prepend> <v-icon icon="mdi-numeric-2" size="small" /> </template>
                <v-list-item-title style="text-wrap: pretty">
                  استقرارية وحماية عالية على مستوى الشبكة.
                </v-list-item-title>
              </v-list-item>
              <v-list-item>
                <template v-slot:prepend>
                  <v-icon icon="mdi-numeric-3" size="small" />
                </template>
                <v-list-item-title style="text-wrap: pretty">
                  تركيب فوري للمعدات عند طلب الزبائن وتفعيل الخدمة في وقت قياسي.
                </v-list-item-title>
              </v-list-item>
              <v-list-item>
                <template v-slot:prepend>
                  <v-icon icon="mdi-numeric-4" size="small" />
                </template>
                <v-list-item-title style="text-wrap: pretty">
                  إمكانية تقديم الخدمة لشركات القطاع مثل شركتي المدار ولبيانا عن طريق ربط المعدات
                  بالأبراج.
                </v-list-item-title>
              </v-list-item>
              <v-list-item>
                <template v-slot:prepend>
                  <v-icon icon="mdi-numeric-4" size="small" />
                </template>
                <v-list-item-title style="text-wrap: pretty">
                  الاستغناء عن الشبكة الهوائية وعدم تشويه المنظر العام واستغلال المسارات بالبنية
                  التحتية لشركة هاتف ليبيا والاستفادة من شبكة المباني.
                </v-list-item-title>
              </v-list-item>
            </v-list>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>
