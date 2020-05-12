class UsersController < ApplicationController
  

  # GET /users
  def index
    render(json: { users: User.all })
  end

  # GET /users/1
  def show
    render(json: User.find(params[:id]))
  end

  # POST /users
def create
    user = User.new(user_params)

    if user.save
      render(json: { user: user }, status: 201)
    else
      # Unprocessable Entity
      render(json: { user: user }, status: 422)
    end
  end

  # PATCH/PUT /users/1
  def update
    user = User.find(params[:id])
    user.update(user_params)
    render(json: { user: user })
  end

  # DELETE /users/1
  def destroy
    user = User.destroy(params[:id])
    render(status: 204)
  end

  private
    # Use callbacks to share common setup or constraints between actions.

    # Only allow a trusted parameter "white list" through.
    def user_params
      params.required(:user).permit(:name, :starsign, :age, :img, :ltl)
    end
end
