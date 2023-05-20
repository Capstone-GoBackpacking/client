import { DataTable } from "primereact/datatable";
import { useMutation, useQuery } from "@apollo/client";
import {
  ACCEPT_JOIN_TRIP,
  DENIED_JOIN_TRIP,
  REQUEST_JOIN_TRIP,
} from "src/graphql/trips";
import { Column } from "primereact/column";
import { Button } from "primereact/button";
import { Toast } from "primereact/toast";
import { useRef } from "react";

const Requests = () => {
  const { data } = useQuery(REQUEST_JOIN_TRIP, {
    fetchPolicy: "network-only",
  });
  const [acceptJoin] = useMutation(ACCEPT_JOIN_TRIP);
  const [deniedJoin] = useMutation(DENIED_JOIN_TRIP);
  const toastRef = useRef(null);

  const accept = async (id) => {
    const response = await acceptJoin({
      variables: {
        input: id,
      },
    });
    toastRef.current.show({
      severity: "success",
      summary: "Success",
      detail: response.acceptJoin,
      life: 3000,
    });
  };

  const denied = async (id) => {
    const response = await deniedJoin({
      variables: {
        input: id,
      },
    });
    toastRef.current.show({
      severity: "warn",
      summary: "Warn",
      detail: response.acceptJoin,
      life: 3000,
    });
  };

  const action = (rowData) => {
    return (
      <div className="flex">
        <Button
          label="Accept"
          severity="success"
          className="mr-2"
          onClick={() => accept(rowData.id)}
        />
        <Button
          label="Denied"
          severity="danger"
          onClick={() => denied(rowData.id)}
        />
      </div>
    );
  };

  return (
    <>
      <Toast ref={toastRef} />
      <DataTable value={data?.myRequest}>
        <Column field="trip.name" header="Trip" />
        <Column field="member.email" header="User" />
        <Column body={(rowData) => action(rowData)} />
      </DataTable>
    </>
  );
};

export default Requests;
