src/machines/authMachine.ts [215:222]:
- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
      updateProfile: async (ctx, event: any) => {
        const payload = omit("type", event);
        const resp = await httpClient.patch(
          `http://localhost:${backendPort}/users/${payload.id}`,
          payload
        );
        return resp.data;
      },
- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -



src/machines/notificationsMachine.ts [15:22]:
- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
    updateData: async (ctx, event: any) => {
      const payload = omit("type", event);
      const resp = await httpClient.patch(
        `http://localhost:${backendPort}/notifications/${payload.id}`,
        payload
      );
      return resp.data;
    },
- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -



