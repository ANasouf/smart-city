<template>
  <div class="mt-3">
    <v-row>
      <v-col>
        <v-card class="red-gradient text-white pa-6">
          <v-card-title class="text-h4">
            <v-icon icon="mdi-transit-connection-variant" size="small" />
            تقنيات الألياف الضوئية إلى الx
          </v-card-title>
          <v-card-text class="mt-4 text-h6">
            <p>
              هو مصطلح عام لأية بنية ذات نطاق عريض تعمل توظيف بطريقة الإرسال المتعدد (أي إرسال أكثر
              من إشارة في قناة واحدة مشتركة) التي تستخدم الألياف الضوئية كوسيط نقل لتحل محل كل أو
              جزء من التوصيلات المعدنية المعتادة المحلية المستخدمة للاتصالات في الميل الأخير.
            </p>
            <p>
              تكنولوجيا FTTx، تشكل نقلة نوعية في في هيكلية الاتصالات باستخدام الألياف البصرية.
              وتتضمن التالي
            </p>
            <v-list class="bg-transparent">
              <v-list-item>
                <template v-slot:prepend>
                  <v-icon icon="mdi-circle-small" size="small" />
                </template>
                <v-list-item-title style="text-wrap: pretty">
                  FTTH يعزز تجربة الاتصالات الي المنازل بفضل توصيل الألياف البصرية مباشرة اليها ،
                  وتوفر سرعات نقل بيانات فائقة .
                </v-list-item-title>
              </v-list-item>
              <v-list-item>
                <template v-slot:prepend>
                  <v-icon icon="mdi-circle-small" size="small" />
                </template>
                <v-list-item-title style="text-wrap: pretty">
                  FTTB يسمح بتحسين كفاءة الاتصالات داخل المباني عن طريق تمديد الألياف البصرية إلىها
                  ثم يتم التوزيع داخلها بواسطة طرق اخري مثل الواي فاي او كوابل الشبكة
                </v-list-item-title>
              </v-list-item>
              <v-list-item>
                <template v-slot:prepend>
                  <v-icon icon="mdi-circle-small" size="small" />
                </template>
                <v-list-item-title style="text-wrap: pretty">
                  FTTC يعزز قدرة الشبكة عند توصيل الألياف البصرية قرب الرصيف، مع استخدام وسائط نقل
                  فعّالة اخري للوصول المباني.
                </v-list-item-title>
              </v-list-item>
              <v-list-item>
                <template v-slot:prepend>
                  <v-icon icon="mdi-circle-small" size="small" />
                </template>
                <v-list-item-title style="text-wrap: pretty">
                  FTTN، تتيح توصيل الألياف إلى عقدة مركزية او ابراج الموبايل مما يحسن السعة الكلية
                  للمحطة ويسمح بتوزيع مثالي للاتصال
                </v-list-item-title>
              </v-list-item>
            </v-list>
            <p>
              هذا التحول نحو تكنولوجيا الألياف البصرية يعكس التقدم العلمي المستمر، ويسهم في توفير
              شبكات أكثر قوة وكفاءة
            </p>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <v-card class="pa-6" v-ripple to="/buildings">
          <v-card-title class="text-h4">
            <!-- <v-icon icon="mdi-sitemap" size="small" /> -->
            الشبكة التفاعلية
          </v-card-title>
          <v-card-text class="mt-4 text-h6">
            <p>اضغط وتفاعل وقم بإيصال انترنت عالي السرعة الى المباني والمنازل</p>
          </v-card-text>
        </v-card>
      </v-col>
      <v-col>
        <v-card class="pa-6" v-ripple to="/sensors">
          <v-card-title class="text-h4">
            <!-- <v-icon icon="mdi-sun-thermometer-outline" size="small" /> -->
            بيانات المدينة الذكية
          </v-card-title>
          <v-card-text class="mt-4 text-h6">
            <p>راقب وتحكم بالمدينة الذكية من خلال الحساسات المنتشرة وتقنيات انترنت الأشياء</p>
          </v-card-text>
        </v-card>
      </v-col>
      <v-col>
        <v-card class="red-gradient text-white pa-6" v-ripple to="/smart-city">
          <v-card-title class="text-h4">مشاريع هاتف ليبيا</v-card-title>
          <v-card-text class="mt-4 text-h6">
            <p>تعرف على شركة هاتف ليبيا وأهم الخدمات والتقنيات التي تقدمها ومشاريعها المختلفة</p>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
    <!-- <v-row>
      <v-col cols="2" class="d-flex text-center">
        <v-card v-ripple @click="printit">
          <img src="../assets/print_it.png" height="150" width="150" alt="" />
        </v-card>
      </v-col>
    </v-row> -->
  </div>
</template>
