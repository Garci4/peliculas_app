@extends('layouts.app')

@section('content')
    <div class="row">
        <br></br>
        <div class="pull-right">
        @if (Route::has('login'))
            <div class="hidden fixed sm:block col-lg-12 margin-tb">
                @auth
                    <a href="{{ url('/logout') }}" class="btn btn-warning text-sm">logout</a>
                @endauth
            </div>
        @endif
        </div>
        <br></br>
        <div class="col-lg-12 margin-tb">
            <div class="pull-left">
                <h2>Peliculas</h2>
            </div>
            <div class="pull-right">
                <a class="btn btn-success" href="{{ route('peliculas.create') }}" title="Create pelicula"> <i class="fas fa-plus-circle"></i> AGREGAR PELICULA
                    </a>
            </div>
            
        </div>
    </div>

    <table class="table table-bordered table-responsive-lg">
        <tr>
            <th>N°</th>
            <th>Nombre</th>
            <th>Año</th>
            <th>Director</th>
            <th>Descripcion</th>
            <th width="280px">Action</th>
        </tr>
        @foreach ($peliculas as $pelicula)
            <tr>
                <td>{{ ++$i }}</td>
                <td>{{ $pelicula->nombre }}</td>
                <td>{{ $pelicula->anio }}</td>
                <td>{{ $pelicula->director }}</td>
                <td>{{ $pelicula->descripcion }}</td>
                <td>
                <div>
                    <a href="{{ route('peliculas.show', $pelicula->id) }}" title="show">
                        <i class="fas fa-eye text-success  fa-lg"></i>
                    </a>

                    <a href="{{ route('peliculas.edit', $pelicula->id) }}">
                        <i class="fas fa-edit  fa-lg"></i>
                    </a>
                    <form action="{{ route('peliculas.destroy', $pelicula->id) }}" class="form-to-delete" method="POST">

                        @method('DELETE')
                        @csrf

                        <button type="submit" title="delete" style="border: none; background-color:transparent;">
                            <i class="fas fa-trash-alt fa-lg text-danger"></i>
                        </button>
                    </form>
                </div>
                </td>
            </tr>
        @endforeach
    </table>

    {!! $peliculas->links() !!}

@endsection

@section('js')
    <script src="//cdn.jsdelivr.net/npm/sweetalert2@11"></script>

    @if (session('eliminar') == 'ok')
        <script>
            Swal.fire(
                'Eliminada!',
                'La pelicula fue eliminada.',
                'success'
                )
        </script>

    @endif
    <script>
        console.log("estoy en script")
        $('.form-to-delete').submit(function(e) {
            console.log("estoy en form delete")
            e.preventDefault();

            Swal.fire({
            title: 'Estas seguro?',
            text: "No vas a poder deshacer esta acción",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Borrar'
            }).then((result) => {
                if (result.isConfirmed) {
                    this.submit();
                }
            })
        })

        
    </script>
@endsection