<script lang="ts">
  import isPortReachable from "is-port-reachable";
  import Card from "./Components/Card.svelte";
  import P from "./Components/P.svelte";
  import { haConn } from "./ha";

  type Service = {
    name: string;
    checkUp: () => Promise<boolean>;
    isUp: boolean;
  };

  let services: Service[] = [
    {
      name: "HA",
      checkUp: async () => $haConn != undefined,
      isUp: false,
    },
    {
      name: "Octopi",
      checkUp: async () => {
        try {
          const response = await fetch("http://pharah");
          return response.status == 200;
        } catch (e) {
          return false;
        }
      },
      isUp: false,
    },
    {
      name: "VPS",
      checkUp: async () => {
        try {
          return await isPortReachable(22, { host: "www.arlodev.co.uk" });
        } catch (e) {
          return false;
        }
      },
      isUp: false,
    },
  ];

  const UpdateServices = async () => {
    services = await Promise.all(
      services.map(async (service) => ({
        ...service,
        isUp: await service.checkUp(),
      })),
    );
  };

  UpdateServices();
</script>

<Card>
  <P class="text-xl font-bold">Status</P>
  <br />
  {#each services as service}
    <P>{service.isUp ? "🟢" : "🔴"} {service.name}</P>
  {/each}
</Card>
