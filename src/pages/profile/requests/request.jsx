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
import { useEffect, useRef, useState } from "react";

const Requests = () => {
  const [requests, setRequests] = useState([]);
  const { data } = useQuery(REQUEST_JOIN_TRIP, {
    fetchPolicy: "network-only",
  });
  const [acceptJoin] = useMutation(ACCEPT_JOIN_TRIP);
  const [deniedJoin] = useMutation(DENIED_JOIN_TRIP);
  const toastRef = useRef(null);

  useEffect(() => {
    if (data) {
      setRequests(data.myRequest);
    }
  }, [data]);

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
    setRequests((state) =>
      state.map((item) => (item.id === id ? { ...item, verify: true } : item))
    );
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
    setRequests((state) => state.filter((item) => item.id !== id));
  };

  const action = (rowData) => {
    return (
      <div className="flex">
        <Button
          label="Accept"
          severity="success"
          className="mr-2"
          onClick={() => accept(rowData.id)}
          disabled={rowData.verify}
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
      <DataTable value={requests}>
        <Column field="trip.name" header="Trip" />
        <Column field="member.email" header="User" />
        <Column body={(rowData) => action(rowData)} />
      </DataTable>
    </>
  );
};

export default Requests;
