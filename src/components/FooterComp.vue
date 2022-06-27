<template>
  <div id="footer">
    <v-app>
      <v-footer dark padless>
        <v-card flat tile class="indigo lighten-1 white--text text-center">
          <v-card-text>
            <v-btn
              v-for="icon in icons"
              :key="icon"
              class="mx-4 white--text"
              icon
            >
              <v-icon size="24px">
                {{ icon }}
              </v-icon>
            </v-btn>
          </v-card-text>
          <v-card-text class="white--text pt-0"> Projeto AIKO </v-card-text>
          <v-divider></v-divider>
          <v-card-text class="white--text">
            {{ new Date().getFullYear() }} — <strong>Vuetify</strong>
          </v-card-text>
        </v-card>
      </v-footer>
    </v-app>
  </div>
</template>

<script>
export default {
  name: "FooterComp",
  data() {
    return {
      icons: ["mdi-linkedin", "mdi-instagram"],
    };
  },
};
</script>

<style lang="scss" scoped>
#footer {
  bottom: 0px;
  width: 100%;
}

.indigo {
  width: 100%;
}

.indigo .lighten-1 .white--text .text-center {
  background-color: #000000;
  border-color: #000000 !important;
}
</style>

