<script lang="ts">
  import { callService } from "home-assistant-js-websocket";
  import Card from "./Components/Card.svelte";
  import P from "./Components/P.svelte";
  import { displayValue, haConn, haEntities } from "./ha";
  import Status from "./Status.svelte";

  export let ha: boolean;
</script>

<Card class="space-y-4 bg-dark border-dark-500">
  {#if ha}
    <P class="text-center">{$haConn.haVersion}</P>
    <P class="text-center">
      {displayValue($haEntities["sensor.ths_2_temperature"])}
    </P>
    <P class="text-center">
      {displayValue($haEntities["sensor.oppo_reno_4_5g_battery_level"])}
    </P>
    <div class="flex justify-center">
      <button
        class="w-12 h-12 p-0 bg-gradient-to-br from-yellow-500 to-orange-500 rounded-[50%]"
        on:click={() => {
          callService(
            $haConn,
            "light",
            $haEntities["light.tz3210_ttkgurpb_ts0504b_light"].state === "on"
              ? "turn_off"
              : "turn_on",
            {},
            { entity_id: "light.tz3210_ttkgurpb_ts0504b_light" },
          );
        }}
      >
        💡
      </button>
    </div>
  {:else}
    <P>HA is down :(</P>
  {/if}
</Card>

<Status />

<Card />

<Card class="col-span-3 row-span-2">
  <P>Hello</P>
</Card>
